/**
 * 游戏设置
 */
class GameSettingView extends egret.Sprite
{
	public constructor() {
		super();

		this.initView();
	}

	private _buttons:Array<any> = [];
	private _buttonNames:Array<any> = ["setBtn2", "helpBtn", "quitBtn2"];
	private initView():void
	{
		var len:number = this._buttonNames.length;
		var button:DButton;
		for(var i:number = 0; i < len; i++)
		{
			button = new DButton("game_json."+this._buttonNames[i]);
			this.addChild(button);
			button.y = i * 69;
			button["name"] = this._buttonNames[i];
			button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		}
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		var name:string = evt.currentTarget.name;
		if(name == "setBtn2")
		{
			GameGlobal.iframeLayer.showIFrame(SettingView);
		}
		else if(name == "helpBtn")
		{
			// GameGlobal.iframeLayer.showIFrame(RuleView);
		}
		else
		{
			AlertView.getInstance().setConfirmCallBack(this.quitConfirm, this);
			AlertView.getInstance().show("是否确定解散房间？", AlertView.CONFIRM_MODE);
		}
	}

	private quitConfirm():void
	{
		var data:Object = {};
        data["msgType"] = NetAction.dissolveRoom;
        data["token"] = GameModel.instance().token;
		data["gameType"] = GameGlobal.gameType;
        data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId};
		
        SocketCommand.getInstance().send(data);
	}
}