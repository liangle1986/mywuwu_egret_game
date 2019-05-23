var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 菜单图层
 */
var MapUILayer = (function (_super) {
    __extends(MapUILayer, _super);
    function MapUILayer() {
        var _this = _super.call(this) || this;
        _this._battleData = null;
        _this.getCurrentLoadBattleRes = "niuniu";
        _this.battleCommonRes = "common";
        _this._callback = null;
        _this.touchEnabled = true;
        _this.initView();
        return _this;
    }
    // 重置舞台大小
    MapUILayer.prototype.resize = function () {
        if (this._hallView)
            this._hallView.resize();
    };
    // 弹出选择框菜单
    MapUILayer.prototype.startBattle = function (battleData) {
        GameGlobal.iframeLayer.closeAllIFrame();
        this._battleData = battleData;
        if (this._battleData == null)
            return;
        if (GameGlobal.gameType == GameGlobal.NIUNIU_TYPE) {
            this.getCurrentLoadBattleRes = "niuniu";
        }
        else {
            this.getCurrentLoadBattleRes = "zjh";
        }
        // 展示舞台function
        this._callback = this.onEnterBattle;
        this.showLoading();
    };
    // 展示框页面
    MapUILayer.prototype.showLoading = function () {
        // 检查组资源
        if (RES.isGroupLoaded(this.getCurrentLoadBattleRes)) {
            // 加载完成直接移除
            this.onLoadResComplete2();
        }
        else {
            // 加载组件
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onLoadResProgress, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadResComplete, this);
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onLoadResError, this);
            GameLoadingView.getInstance().show();
            RES.loadGroup(this.battleCommonRes, 1);
        }
    };
    // 加载进度条
    MapUILayer.prototype.onLoadResProgress = function (evt) {
        GameLoadingView.getInstance().setProgress(evt.itemsLoaded, evt.itemsTotal);
    };
    // 加载完成执行
    MapUILayer.prototype.onLoadResComplete = function (evt) {
        // 是否是公共资源组（true 加载）
        if (evt.groupName == this.battleCommonRes) {
            RES.loadGroup(this.getCurrentLoadBattleRes, 1);
        }
        else {
            this.onLoadResComplete2();
        }
    };
    // 移除监听
    MapUILayer.prototype.onLoadResComplete2 = function () {
        GameLoadingView.getInstance().hide();
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onLoadResProgress, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoadResComplete, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onLoadResError, this);
        if (this._callback)
            this._callback.apply(this);
    };
    // 失败记录日志
    MapUILayer.prototype.onLoadResError = function (evt) {
        LogUtils.log(evt.groupName + "加载失败！");
    };
    MapUILayer.prototype.onQuitTeahouse = function (evt) { };
    // 初始化大厅菜单
    MapUILayer.prototype.initView = function () {
        GameEventManager.addEvent(NetAction.createRoom.toString(), this.onCreateRoomResponse, this); //创建房间
        GameEventManager.addEvent(NetAction.teahouse_create.toString(), this.onCreateTeahouseResponse, this); //创建茶楼
        GameEventManager.addEvent(NetAction.teahouse_join.toString(), this.onJoinTeahouseResponse, this); //加入茶楼
        GameEventManager.addEvent(NetAction.teahouse_quit.toString(), this.onQuitTeahouse, this); //退出茶楼
        GameEventManager.addEvent(NetAction.enterRoom.toString(), this.onEnterRoomResponse, this); //加入房间
        GameEventManager.addEvent(GameEventManager.SOCKET_CONNECTED, this.onSocketConnected, this); //socket链接重新加入房间
        GameEventManager.addEvent(NetAction.refreshRoom.toString(), this.onRefreshRoomResponse, this); //刷新房间
        GameEventManager.addEvent(NetAction.enterHall.toString(), this.onEnterHallResponse, this); //进入大厅
        GameEventManager.addEvent(NetAction.updateFangKa.toString(), this.onUpdateFangKaResponse, this); //房卡更新
        GameEventManager.addEvent(NetAction.teahouse_backToHall.toString(), this.onQuitTeahouseToHall, this); // 退出茶楼到大厅
        GameEventManager.addEvent(NetAction.teahouse_enter.toString(), this.onTeahouseEnterResponse, this); //进入茶楼
        if (GameModel.instance().roomId != 0) {
            this.refreshRoom();
        }
        else {
            if (GameModel.instance().teaHouseNum != 0) {
                var data = {};
                data["msgType"] = NetAction.teahouse_enter;
                data["gameType"] = 0;
                data["msg"] = { teaHouseNum: GameModel.instance().teaHouseNum };
                SocketCommand.getInstance().send(data);
            }
            else
                this.showHallView();
        }
    };
    // 进入茶楼
    MapUILayer.prototype.onTeahouseEnterResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        GameModel.instance().teaHouseNum = data["teaHouseNum"];
        this.showTeahouseView(data);
    };
    // 大厅菜单
    MapUILayer.prototype.onQuitTeahouseToHall = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this.showHallView();
    };
    MapUILayer.prototype.onJoinTeahouseResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        GameGlobal.iframeLayer.hideIFrame2(JoinTeahouseView);
        AlertView.getInstance().show("茶楼加入请求已发出，等待审核！", AlertView.ALERT_MODE);
    };
    // 显示大厅
    MapUILayer.prototype.showHallView = function () {
        if (this._hallView == null)
            this._hallView = new HallView();
        this.addChild(this._hallView);
        this._hallView.show();
        SoundManager.instance.playMusic("hall_mp3");
        if (this._teahouseView && this._teahouseView.parent) {
            this._teahouseView.dispose();
            this._teahouseView.parent.removeChild(this._teahouseView);
            GameGlobal.iframeLayer.hideIFrame2(TeahouseManagerView);
        }
    };
    MapUILayer.prototype.showTeahouseView = function (data) {
        if (GameGlobal.iframeLayer) {
            GameGlobal.iframeLayer.hideIFrame2(CreateTeahouseView);
            GameGlobal.iframeLayer.hideIFrame2(JoinTeahouseView);
        }
        if (this._teahouseView == null)
            this._teahouseView = new TeahouseView();
        this.addChild(this._teahouseView);
        this._teahouseView.init(data);
        GameGlobal.mapUILayer.visible = true;
        SoundManager.instance.playMusic("hall_mp3");
        if (this._hallView && this._hallView.parent)
            this._hallView.parent.removeChild(this._hallView);
    };
    // 房卡更新
    MapUILayer.prototype.onUpdateFangKaResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var roomCardNum = data["roomCardNum"];
        var playerId = data["playerId"];
        if (playerId == MyUserInfo.getInstance().userId)
            MyUserInfo.getInstance().gold = roomCardNum;
    };
    MapUILayer.prototype.onEnterHallResponse = function (evt) {
        GameGlobal.mapLayer.hideBattle();
        GameGlobal.mapUILayer.visible = true;
    };
    //从新加入房间
    MapUILayer.prototype.onSocketConnected = function (evt) {
        DataLoading.getInstance().hide();
        this.refreshRoom();
    };
    //刷新用户房间
    MapUILayer.prototype.refreshRoom = function () {
        var data = {};
        data["msgType"] = NetAction.refreshRoom;
        data["msg"] = { refreshType: 1 };
        data["gameType"] = 0;
        SocketCommand.getInstance().send(data);
    };
    // 刷新房间后执行
    MapUILayer.prototype.onRefreshRoomResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var status = data["status"];
        this.startBattle(data);
    };
    MapUILayer.prototype.onEnterRoomResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this.startBattle(data);
    };
    // 创建房间
    MapUILayer.prototype.onCreateRoomResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this.startBattle(data);
    };
    /**
     * 创建茶楼返回
     */
    MapUILayer.prototype.onCreateTeahouseResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        //设置当前进入茶楼
        GameModel.instance().teaHouseNum = data["teaHouseNum"];
        this.showTeahouseView(data);
    };
    MapUILayer.prototype.onEnterBattle = function () {
        GameGlobal.mapUILayer.visible = false;
        GameGlobal.mapLayer.showBattle(this._battleData);
    };
    return MapUILayer;
}(egret.DisplayObjectContainer));
__reflect(MapUILayer.prototype, "MapUILayer");
//# sourceMappingURL=MapUILayer.js.map