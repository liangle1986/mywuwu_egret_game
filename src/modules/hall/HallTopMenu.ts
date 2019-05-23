class HallTopMenu
{
	public constructor(ui:any) {
		
		this._ui = ui;

		this.initView();
	}

	private _ui:any;

	
	private _logo:egret.Bitmap;
	//btns
	private _setBtn:eui.Button;
	private _scoreBtn:eui.Button; //战绩
	private _quitBtn:eui.Button;
	private _btnContainer:egret.DisplayObjectContainer;

	// public resize():void
	// {
	// 	this._btnContainer.y = 9;
	// 	this._btnContainer.x = GameGlobal.stageW - 350;//786;
	// }

	private initView():void
	{
		this._setBtn = this._ui["setBtn"];
		this._scoreBtn = this._ui["zhanjiBtn"];
		this._quitBtn = this._ui["quitBtn"];
		// this._selfInfoView = new SelfInfoView();
		// this._selfInfoView.y = 23;
		// this.addChild(this._selfInfoView);

		// this._logo = new egret.Bitmap();
		// this._logo.texture = RES.getRes("hall_json.logo2");
		// this.addChild(this._logo);
		// this._logo.x = 473;

		// this._btnContainer = new egret.DisplayObjectContainer();
		// this.addChild(this._btnContainer);

		// this._mailBtn = new DButton("hall_json.mailBtn");
		// this._btnContainer.addChild(this._mailBtn);
		// this._mailBtn.visible = false;

		// this._setBtn = new DButton("hall_json.setBtn");
		// this._btnContainer.addChild(this._setBtn);

		// this._scoreBtn = new DButton("hall_json.zhanjiBtn");
		// this._btnContainer.addChild(this._scoreBtn);

		// this._quitBtn = new DButton("hall_json.quitBtn");
		// this._btnContainer.addChild(this._quitBtn);

		// this._setBtn.x = 83;
		// this._scoreBtn.x = 165;
		// this._quitBtn.x = 258;

		// this._mailBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
		this._setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
		this._scoreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
		this._quitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);

		// this.resize();



	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		SoundManager.instance.playSound("button_mp3");
		switch(evt.currentTarget)
		{
			case this._setBtn:
				GameGlobal.iframeLayer.showIFrame(SettingView);
				break;
			case this._scoreBtn:
				GameGlobal.iframeLayer.showIFrame(ZhanjiView);
				break;
			case this._quitBtn:
				AlertView.getInstance().setConfirmCallBack(this.quitConfirm, this);
				AlertView.getInstance().show("确定要离开游戏吗？", AlertView.CONFIRM_MODE);
				break;
		}
	}

	private quitConfirm():void
	{
		egret.ExternalInterface.call("exitGame", "exitGame");
	}
}