/**
 * 玩家自己
 */
class MyPlayerView extends PlayerView
{
	private _kanpaiTip:egret.Bitmap;

	public reset():void
	{
		super.reset();
		this._cardGroup.showPokerValue(false);
		this._cardGroup.visible = false;
		this._kanpaiTip.visible = false;
	}

	public hidePoker():void
	{
		this._kanpaiTip.visible = false;
		this._cardGroup.showPokerValue(false);
		this._cardGroup.visible = false;
		this._giveuped.visible = false;
	}
	/**
	 * 看牌
	 */
	public lookPoker(cardList:Array<any>, showAnimation:boolean = true):void
	{
		
		super.lookPoker(cardList, showAnimation);
		
		if(cardList != null && cardList.length > 0)
			this._kanpaiTip.visible = false;
	}

	// 更新牌的状态
	public updateStatus(status:number):void
	{
		super.updateStatus(status);

		this._kanpaiTip.visible = (status == PlayerView.NOT_LOOK && this._cardGroup.visible);
	}

	public set canLook(value:boolean)
	{
		if(value)
		{
			this._kanpaiTip.visible = true;
			this._cardGroup.touchEnabled = true;
		}
		else
		{
			this._kanpaiTip.visible = false;
			this._cardGroup.touchEnabled = false;
		}
	}
	
	public constructor() {
		super();
		
		this._faceBg.visible = false;
		
		var nickNameBg:egret.Bitmap = DUtils.createBitmapByName("nnGame2_json.nameBg");
		nickNameBg.x = 154; nickNameBg.y = 151;
		this.addChild(nickNameBg);

		this._nickNameTF = new egret.TextField();
		this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._nickNameTF.size = 30;
		this._nickNameTF.textColor = 0xffffff;
		this._nickNameTF.textAlign = egret.HorizontalAlign.CENTER;
		this._nickNameTF.width = 154;
		this._nickNameTF.x = 146; this._nickNameTF.y = 157;
		this.addChild(this._nickNameTF);
		this._nickNameTF.text = "...";

		var goldBg:egret.Bitmap = DUtils.createBitmapByName("nnGame2_json.nameBg");
		goldBg.x = 389; goldBg.y = 151;
		this.addChild(goldBg);

		this._scoreTF = new egret.TextField();
		this._scoreTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._scoreTF.size = 30;
		this._scoreTF.textColor = 0xffdb56;
		this._scoreTF.textAlign = egret.HorizontalAlign.CENTER;
		this._scoreTF.width = 154;
		this._scoreTF.x = 380; this._scoreTF.y = 157;
		this.addChild(this._scoreTF);
		this._scoreTF.text = "";

		this._kanpaiTip = new egret.Bitmap();
		this._kanpaiTip.texture = RES.getRes("zjhGame_json.kanpaiTip");
		this.addChild(this._kanpaiTip);
		this._kanpaiTip.x = 444; this._kanpaiTip.y = 43;
		this._kanpaiTip.visible = false;

		this._cardGroup.touchChildren = false;
		this._cardGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCard, this);
	}

	private onTouchCard(evt:egret.TouchEvent):void
	{
		var data:Object = {};
		data["msgType"] = NetAction.look;
		data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId};

		SocketCommand.getInstance().send(data);
	}
}
