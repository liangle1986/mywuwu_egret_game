/**
 * 地图层
 */
class MapLayer extends eui.Component
{
	public constructor() 
	{
		super();
		//地图背景
		GameGlobal.mapBGLayer = new MapBgLayer();
		this.addChild(GameGlobal.mapBGLayer);

		GameEventManager.addEvent(NetAction.dissolveRoom.toString(), this.dissolveRoomResponse, this); //解散房间请求
		GameEventManager.addEvent(NetAction.dissolveRoomSuccess.toString(), this.dissolveRoomSuccessResponse, this); //解散成功
		GameEventManager.addEvent(GameEventManager.QUIT_ROOM, this.onQuitGame, this); //退出房间
	}

	// 退出房间
	private onQuitGame(evt:DEvent):void
	{
		this.hideBattle();
		GameGlobal.mapUILayer.visible = true;
		SoundManager.instance.playMusic("hall_mp3");
	}

	/**
	 * 解散房间请求
	 */
	private dissolveRoomResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var playerId:string = data["playerId"];

		// 如果不是直接，监听是否同意解散
		if(playerId != MyUserInfo.getInstance().userId)
		{
			// 根据用户id 获取舞台类型
			var playerData:Object = this.getBattle().getPlayerInfoById(playerId);
			var nickName:string = playerData["nickName"];
			AlertView.getInstance().setConfirmCallBack(this.agreeDissolveRoom, this);
			AlertView.getInstance().setCancelCallBack(this.disagreeDissolveRoom, this);
			AlertView.getInstance().show("玩家"+nickName+"请求解散房间，是否同意？", AlertView.CONFIRM_MODE);
		}
	}

	// 同意解散完成监听处理
	private agreeDissolveRoom():void
	{
		var data:Object = {};
        data["msgType"] = NetAction.agreeDissolveRoom;
        data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId};
		
        SocketCommand.getInstance().send(data);
	}

	// 不同意解散，后续处理
	private disagreeDissolveRoom():void
	{
		var data:Object = {};
        data["msgType"] = NetAction.disagreeDissolveRoom;
        data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId};
		
        SocketCommand.getInstance().send(data);
	}

	// 解散成功音乐播放
	private dissolveRoomSuccessResponse(evt:DEvent):void
	{
		var result:Object = evt.data;

		// 隐藏房间信息
		this.hideBattle();
		GameGlobal.mapUILayer.visible = true;
		SoundManager.instance.playMusic("hall_mp3");
	}

	public hideBattle():void
	{
		// 移除对应舞台
		if(this._gameView && this._gameView.stage)
		{
			this._gameView.dispose();
			this.removeChild(this._gameView.getView());
			this._gameView = null;
		}

		if(this.nnBattleView && this.nnBattleView.stage)
		{
			this.nnBattleView.dispose();
			this.removeChild(this.nnBattleView);
		}

		// 关闭所以界面呢
		GameGlobal.iframeLayer.hideIFrame2(GameResult);
		GameGlobal.iframeLayer.hideIFrame2(JieSuanView);
		GameGlobal.iframeLayer.hideIFrame2(NNGameResult);
		if(BiPaiView.isShow)
		{
			BiPaiView.getInstance().hide();
		}
	}

	private _gameView:ZjhBattleView;
	// 获取对应游戏舞台信息
	public getBattle():any
	{
		if(this._gameView && this._gameView.stage)
			return this._gameView;
		else if(this.nnBattleView && this.nnBattleView.stage)
			return this.nnBattleView;
		return null;
	}

	// 展示对应舞台信息
	public showBattle(battleData:Object = null):void
	{
		// 先移除，在展示
		this.hideBattle();

		if(GameGlobal.gameType == 3)
		{
			this._gameView = new ZjhBattleView();
			this.addChild(this._gameView.getView());
			this._gameView.init(battleData);
		}
		else if(GameGlobal.gameType == 1)
		{
			if(this.nnBattleView == null)
				this.nnBattleView = new NNBattleView();
			this.addChild(this.nnBattleView);
			this.nnBattleView.init(battleData);
		}
	}

	private nnBattleView:NNBattleView = null;
		
}