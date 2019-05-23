class PlayerInfoView extends IFrameBase
{
	public constructor() {
		super();
		
		this.skinName = "PlayerDetailInfoSkin2";

	}

	private nickNameTF:eui.Label;
	private idTF:eui.Label;
	private ipTF:eui.Label;
	private distanceTF:eui.Label;

	private bq1:eui.Image;
	private bq2:eui.Image;
	private bq3:eui.Image;
	private bq4:eui.Image;
	private bq5:eui.Image;

	private _faceImg:DImage;

	public tweenShow(): void
	{
		super.tweenShow();

		var faceUrl:string = "";
		this.ipTF.text = "";
		this.distanceTF.text = "";
		var nickNameStr:string = "";

		if(this.uiOpenData != null)
		{
			var playerId:string = this.uiOpenData["playerId"];
			if(playerId == MyUserInfo.getInstance().userId)
			{
				nickNameStr = MyUserInfo.getInstance().userName;
				this.idTF.text = "ID：" + MyUserInfo.getInstance().userId;
				this.ipTF.text = MyUserInfo.getInstance().city;
				faceUrl = MyUserInfo.getInstance().faceUrl;
				this.distanceTF.text = "";

				this.bq1.visible = this.bq2.visible = this.bq3.visible = this.bq4.visible = this.bq5.visible = false;
			}
			else
			{

				this.bq1.visible = this.bq2.visible = this.bq3.visible = this.bq4.visible = this.bq5.visible = true;
				nickNameStr =  this.uiOpenData["nickName"];
				this.idTF.text = "ID：" + this.uiOpenData["playerId"];
				faceUrl = this.uiOpenData["headImgUrl"];

				GameEventManager.removeEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
				GameEventManager.addEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);

				var msgObj:Object = {};
				msgObj["msgType"] = NetAction.playerInfo;
				msgObj["token"] = GameModel.instance().token;
				msgObj["msg"] = {"otherPlayerId":this.uiOpenData["playerId"]};
				SocketCommand.getInstance().send(msgObj);
			}
			
		}

		if(nickNameStr.length > 8)
		{
			nickNameStr = nickNameStr.substr(0, 8) + "...";
		}
		this.nickNameTF.text = nickNameStr;
		this._faceImg.load(faceUrl);

		this.bindButton(this.bq1);
		this.bindButton(this.bq2);
		this.bindButton(this.bq3);
		this.bindButton(this.bq4);
		this.bindButton(this.bq5);
	}

	public createComplete(event: egret.Event): void 
	{
		super.createComplete(event);
		
		this._faceImg = new DImage(124, 124, "hall_json.testface2");
		this["mainView"].addChild(this._faceImg);
		this._faceImg.x = 45; this._faceImg.y = 88;
	}

	public setData(data:Object = null, showPosition:boolean = false):void
	{
		// var faceUrl:string = "";
		// var nickName:string = "";
		// if(data == null)
		// {
		// 	nickName = MyUserInfo.getInstance().userName;
		// 	this._userIdTF.text = MyUserInfo.getInstance().userId;
		// 	this._ipTF.text = MyUserInfo.getInstance().city;
		// 	faceUrl = MyUserInfo.getInstance().faceUrl;
		// }
		// else
		// {
		// 	nickName = data["nickName"];
		// 	this._userIdTF.text = data["playerId"];
		// 	this._ipTF.text = data["ip"];
		// 	faceUrl = data["headImgUrl"];
		// }

		// if(nickName.length > 10)
		// {
		// 	nickName = nickName.substr(0, 10)+"...";
		// }
		// this._nickNameTF.text = nickName;
		
		// if(showPosition)
		// {
		// 	GameEventManager.removeEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
		// 	GameEventManager.addEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
		// 	var data:Object = {};
		// 	data["msgType"] = NetAction.playerInfo;
		// 	data["token"] = GameModel.instance().token;
		// 	SocketCommand.getInstance().send(data);
		// }

		// this._faceImg.texture = RES.getRes("game_json.testFace");
		// this._faceImg.width = 124; this._faceImg.height = 124;
		
		// this.loadFace(faceUrl);
	}

	private onPlayerInfoResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];

		this.ipTF.text = data["address"];
		this.distanceTF.text = data["distance"];
	}

	/**
	 * 子类如果有bindButton, click事件覆盖次方法实现
	 */
	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		var chatMsg:string = "xh";
		if(clickTarget == this.bq1)
		{	
			chatMsg = "dzh";
		}
		else if(clickTarget == this.bq2)
		{
			chatMsg = "hc";
		}
		else if(clickTarget == this.bq3)
		{
			chatMsg = "pj";
		}
		else if(clickTarget == this.bq4)
		{
			chatMsg = "jd";
		}
		else if(clickTarget == this.bq5)
		{
			// chatMsg = "dzh";
		}

		var data:Object = {};
		data["msgType"] = NetAction.chatMsg;
		data["msg"] = {"chatType":5, "chatMsg":chatMsg, "otherPlayerId": this.uiOpenData["playerId"]};
		SocketCommand.getInstance().send(data);

		this.close();
	}
}