class SelfInfoView
{
	private _ui:any;
	public constructor(ui:any) {
		
		this._ui = ui;

		this.initView();
	}

	private _nickNameTF:egret.TextField;
	private _idTF:egret.TextField;
	private _faceImg:DImage;
	private _roomCardBtn:eui.Button;
	private _roomCardTF:eui.Label;

	private initView():void
	{
		// this._infoBg = new egret.Bitmap();
		// this._infoBg.texture = RES.getRes("hall_json.selfInfoBg");
		// this.addChild(this._infoBg);

		this._nickNameTF = this._ui["nickNameTF"];
		this._idTF = this._ui["idTF"];
		this._roomCardBtn = this._ui["roomCardBtn"];
		this._roomCardTF = this._ui["roomCardTF"];
		
		// this._nickNameTF.textColor = 0xffffff;
		// this._nickNameTF.size = 17;
		// this.addChild(this._nickNameTF);
		// this._nickNameTF.textAlign = egret.HorizontalAlign.LEFT;
		// this._nickNameTF.x = 62; this._nickNameTF.y = 14;
		this._nickNameTF.text = "--";

		// this._idTF = new egret.TextField();
		// this._idTF.textColor = 0xffffff;
		// this._idTF.size = 17;
		// this.addChild(this._idTF);
		// this._idTF.textAlign = egret.HorizontalAlign.LEFT;
		// this._idTF.x = 62; this._idTF.y = 33;
		this._idTF.text = "--";

		this._faceImg = new DImage(59, 54);
		this._ui.addChild(this._faceImg);
		this._faceImg.y = 2;
		this._faceImg.load(MyUserInfo.getInstance().faceUrl);

		// this._roomCardBg = new egret.Bitmap();
		// this.addChild(this._roomCardBg);
		// this._roomCardBg.texture = RES.getRes("hall_json.roomCardBg");
		// this._roomCardBg.x = 223; this._roomCardBg.y = 3;

		// this._roomCardTF = new egret.TextField();
		// this._roomCardTF.textColor = 0x000000;
		// this._roomCardTF.size = 25;
		// this.addChild(this._roomCardTF);
		// this._roomCardTF.textAlign = egret.HorizontalAlign.CENTER;
		// this._roomCardTF.x = 268; this._roomCardTF.y = 15;
		// this._roomCardTF.width = 104;
		// this._roomCardTF.text = "0";
		

		// this._addBtn = new DButton("hall_json.coinAddBtn");
		// this.addChild(this._addBtn);
		// this._addBtn.x = 369; this._addBtn.y = 10;

		var userName:string = MyUserInfo.getInstance().userName;
		if(StringUtils.getStringLen(userName) > 11)
			userName = userName.substr(0, 11)+"...";

		this._nickNameTF.text = userName;
		this._idTF.text = MyUserInfo.getInstance().userId.toString();
		

		GameEventManager.addEvent(GameEventManager.UPDATE_USER_GOLD, this.onUpdateUserGold, this);
		this.onUpdateUserGold(null);

		this._faceImg.touchEnabled = true;
		this._faceImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);

		this._roomCardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	}

	private onUpdateUserGold(evt:DEvent):void
	{
		this._roomCardTF.text = MyUserInfo.getInstance().gold.toString();
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		if(evt.currentTarget == this._roomCardBtn)
		{
			GameGlobal.iframeLayer.showIFrame(MallView2);
		}
		else
			GameGlobal.iframeLayer.showIFrame(SelfDetailInfoView);
	}
}