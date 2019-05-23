/**
 * 菜单图层
 */
class MapUILayer extends egret.DisplayObjectContainer {
  private _hallView: HallView;
  private _teahouseView: TeahouseView;

  public constructor() {
    super();

    this.touchEnabled = true;

    this.initView();
  }

  // 重置舞台大小
  public resize(): void {
    if (this._hallView) this._hallView.resize();
  }

  private _battleData: Object = null;
  // 弹出选择框菜单
  private startBattle(battleData: Object): void {
    GameGlobal.iframeLayer.closeAllIFrame();

    this._battleData = battleData;
    if (this._battleData == null) return;

    if (GameGlobal.gameType == GameGlobal.NIUNIU_TYPE) {
      this.getCurrentLoadBattleRes = "niuniu";
    } else {
      this.getCurrentLoadBattleRes = "zjh";
	}
	// 展示舞台function
    this._callback = this.onEnterBattle;
    this.showLoading();
  }

  private getCurrentLoadBattleRes: string = "niuniu";
  private battleCommonRes: string = "common";

  private _callback: Function = null;
  
  // 没用上
  private _loadingView: GameLoadingView;
  // 展示框页面
  private showLoading(): void {
    // 检查组资源
    if (RES.isGroupLoaded(this.getCurrentLoadBattleRes)) {
      // 加载完成直接移除
      this.onLoadResComplete2();
    } else {
      // 加载组件
      RES.addEventListener(
        RES.ResourceEvent.GROUP_PROGRESS,
        this.onLoadResProgress,
        this
      );
      RES.addEventListener(
        RES.ResourceEvent.GROUP_COMPLETE,
        this.onLoadResComplete,
        this
      );
      RES.addEventListener(
        RES.ResourceEvent.ITEM_LOAD_ERROR,
        this.onLoadResError,
        this
      );

      GameLoadingView.getInstance().show();
      RES.loadGroup(this.battleCommonRes, 1);
    }
  }

  // 加载进度条
  private onLoadResProgress(evt: RES.ResourceEvent): void {
    GameLoadingView.getInstance().setProgress(evt.itemsLoaded, evt.itemsTotal);
  }

  // 加载完成执行
  private onLoadResComplete(evt: RES.ResourceEvent): void {
    // 是否是公共资源组（true 加载）
    if (evt.groupName == this.battleCommonRes) {
      RES.loadGroup(this.getCurrentLoadBattleRes, 1);
    } else {
      this.onLoadResComplete2();
    }
  }

  // 移除监听
  private onLoadResComplete2(): void {
    GameLoadingView.getInstance().hide();
    RES.removeEventListener(
      RES.ResourceEvent.GROUP_PROGRESS,
      this.onLoadResProgress,
      this
    );
    RES.removeEventListener(
      RES.ResourceEvent.GROUP_COMPLETE,
      this.onLoadResComplete,
      this
    );
    RES.removeEventListener(
      RES.ResourceEvent.ITEM_LOAD_ERROR,
      this.onLoadResError,
      this
    );

    if (this._callback) this._callback.apply(this);
  }

  // 失败记录日志
  private onLoadResError(evt: RES.ResourceEvent): void {
    LogUtils.log(evt.groupName + "加载失败！");
  }

  private onQuitTeahouse(evt: DEvent): void {}

  // 初始化大厅菜单
  private initView(): void {
    GameEventManager.addEvent(
      NetAction.createRoom.toString(),
      this.onCreateRoomResponse,
      this
    ); //创建房间
    GameEventManager.addEvent(
      NetAction.teahouse_create.toString(),
      this.onCreateTeahouseResponse,
      this
    ); //创建茶楼
    GameEventManager.addEvent(
      NetAction.teahouse_join.toString(),
      this.onJoinTeahouseResponse,
      this
    ); //加入茶楼
    GameEventManager.addEvent(
      NetAction.teahouse_quit.toString(),
      this.onQuitTeahouse,
      this
    );//退出茶楼
    GameEventManager.addEvent(
      NetAction.enterRoom.toString(),
      this.onEnterRoomResponse,
      this
    ); //加入房间
    GameEventManager.addEvent(
      GameEventManager.SOCKET_CONNECTED,
      this.onSocketConnected,
      this
    ); //socket链接重新加入房间
    GameEventManager.addEvent(
      NetAction.refreshRoom.toString(),
      this.onRefreshRoomResponse,
      this
    ); //刷新房间
    GameEventManager.addEvent(
      NetAction.enterHall.toString(),
      this.onEnterHallResponse,
      this
    ); //进入大厅
    GameEventManager.addEvent(
      NetAction.updateFangKa.toString(),
      this.onUpdateFangKaResponse,
      this
    ); //房卡更新
    GameEventManager.addEvent(
      NetAction.teahouse_backToHall.toString(),
      this.onQuitTeahouseToHall,
      this
    ); // 退出茶楼到大厅
    GameEventManager.addEvent(
      NetAction.teahouse_enter.toString(),
      this.onTeahouseEnterResponse,
      this
    ); //进入茶楼

    if (GameModel.instance().roomId != 0) {
      this.refreshRoom();
    } else {
      if (GameModel.instance().teaHouseNum != 0) {
        var data: Object = {};
        data["msgType"] = NetAction.teahouse_enter;
        data["gameType"] = 0;
        data["msg"] = { teaHouseNum: GameModel.instance().teaHouseNum };
        SocketCommand.getInstance().send(data);
      } else this.showHallView();
    }
  }

  // 进入茶楼
  private onTeahouseEnterResponse(evt: DEvent): void {
    var result: Object = evt.data;
    var data: Object = result["data"];
    GameModel.instance().teaHouseNum = data["teaHouseNum"];

    this.showTeahouseView(data);
  }

  // 大厅菜单
  private onQuitTeahouseToHall(evt: DEvent): void {
    var result: Object = evt.data;
    var data: Object = result["data"];

    this.showHallView();
  }

  private onJoinTeahouseResponse(evt: DEvent): void {
    var result: Object = evt.data;
    var data: Object = result["data"];

    GameGlobal.iframeLayer.hideIFrame2(JoinTeahouseView);
    AlertView.getInstance().show(
      "茶楼加入请求已发出，等待审核！",
      AlertView.ALERT_MODE
    );
  }

  // 显示大厅
  public showHallView(): void {
    if (this._hallView == null) this._hallView = new HallView();
    this.addChild(this._hallView);
    this._hallView.show();
    SoundManager.instance.playMusic("hall_mp3");

    if (this._teahouseView && this._teahouseView.parent) {
      this._teahouseView.dispose();
      this._teahouseView.parent.removeChild(this._teahouseView);
      GameGlobal.iframeLayer.hideIFrame2(TeahouseManagerView);
    }
  }

  public showTeahouseView(data: Object): void {
    if (GameGlobal.iframeLayer) {
      GameGlobal.iframeLayer.hideIFrame2(CreateTeahouseView);
      GameGlobal.iframeLayer.hideIFrame2(JoinTeahouseView);
    }

    if (this._teahouseView == null) this._teahouseView = new TeahouseView();
    this.addChild(this._teahouseView);
    this._teahouseView.init(data);
    GameGlobal.mapUILayer.visible = true;
    SoundManager.instance.playMusic("hall_mp3");

    if (this._hallView && this._hallView.parent)
      this._hallView.parent.removeChild(this._hallView);
  }

  // 房卡更新
  private onUpdateFangKaResponse(evt: DEvent): void {
    var result: Object = evt.data;
    var data: Object = result["data"];
    var roomCardNum: number = data["roomCardNum"];
    var playerId: string = data["playerId"];

    if (playerId == MyUserInfo.getInstance().userId)
      MyUserInfo.getInstance().gold = roomCardNum;
  }

  private onEnterHallResponse(evt: DEvent): void {
    GameGlobal.mapLayer.hideBattle();
    GameGlobal.mapUILayer.visible = true;
  }

  //从新加入房间
  private onSocketConnected(evt: DEvent): void {
    DataLoading.getInstance().hide();
    this.refreshRoom();
  }
  //刷新用户房间
  private refreshRoom(): void {
    var data: Object = {};
    data["msgType"] = NetAction.refreshRoom;
    data["msg"] = { refreshType: 1 };
    data["gameType"] = 0;
    SocketCommand.getInstance().send(data);
  }

  // 刷新房间后执行
  private onRefreshRoomResponse(evt: DEvent): void {
    var result: Object = evt.data;
    var data: Object = result["data"];
    var status: number = data["status"];

    this.startBattle(data);
  }

  private onEnterRoomResponse(evt: DEvent): void {
    var result: Object = evt.data;
    var data: Object = result["data"];

    this.startBattle(data);
  }

  // 创建房间
  private onCreateRoomResponse(evt: DEvent): void {
    var result: Object = evt.data;
    var data: Object = result["data"];

    this.startBattle(data);
  }
  /**
   * 创建茶楼返回
   */
  private onCreateTeahouseResponse(evt: DEvent): void {
    var result: Object = evt.data;
    var data: Object = result["data"];
    //设置当前进入茶楼
    GameModel.instance().teaHouseNum = data["teaHouseNum"];
    this.showTeahouseView(data);
  }

  private onEnterBattle(): void {
    GameGlobal.mapUILayer.visible = false;
    GameGlobal.mapLayer.showBattle(this._battleData);
  }
}
