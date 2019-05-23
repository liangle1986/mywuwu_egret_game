/**
 * 警告框 / 确认框
 */
class AlertView extends egret.Sprite {
	private _bg: egret.Shape;

	private _kuang: egret.Bitmap;
	private _confirmBtn: egret.Bitmap;
	private _cancelBtn: egret.Bitmap;
	private _confirmBtn2: egret.Bitmap;
	private _messageTF: egret.TextField;

	public static ALERT_MODE: number = 1;
	public static CONFIRM_MODE: number = 2;

	private static _instance: AlertView = null;
	public static getInstance(): AlertView {
		if (this._instance == null)
			this._instance = new AlertView();
		return this._instance;
	}

	public constructor() {
		super();
		this.initView();
	}

	private _confirmCallBackFun: Function;
	private _thisObj: any;

	public setConfirmCallBack(backFun: Function, thisObj: any): void {
		this._confirmCallBackFun = backFun;
		this._thisObj = thisObj;
	}
	private _cancelCallBackFun: Function;
	public setCancelCallBack(backFun: Function, thisObj: any): void {
		this._cancelCallBackFun = backFun;
		this._thisObj = thisObj;
	}

	public show(text: string, mode: number = AlertView.CONFIRM_MODE): void {
		this._messageTF.text = text;
		GameGlobal.stage.addChild(this);

		if (mode == AlertView.ALERT_MODE) {
			this._confirmBtn2.visible = true;
			this._cancelBtn.visible = this._confirmBtn.visible = false;
		}
		else {
			this._confirmBtn2.visible = false;
			this._cancelBtn.visible = this._confirmBtn.visible = true;
		}
	}
	public hide(): void {
		if (this.stage)
			GameGlobal.stage.removeChild(this);
		this._confirmCallBackFun = null;
		this._cancelCallBackFun = null;
	}

	private initView(): void {
		this._bg = new egret.Shape();
		this._bg.graphics.beginFill(0, 0.5);
		this._bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
		this._bg.graphics.endFill();
		this.addChild(this._bg);

		var content: egret.Sprite = new egret.Sprite();
		this.addChild(content);

		this._kuang = new egret.Bitmap();
		this._kuang.texture = RES.getRes("alert_bg_png");
		content.addChild(this._kuang);

		this._messageTF = new egret.TextField();
		this._messageTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._messageTF.multiline = true;
		this._messageTF.height = 152;
		this._messageTF.width = 548;//this._kuang.width;
		this._messageTF.wordWrap = true;
		// this._messageTF.height = 
		this._messageTF.textAlign = egret.HorizontalAlign.CENTER;
		this._messageTF.size = 25; this._messageTF.textColor = 0xffffff;//0x63370a;
		this._messageTF.y = 77;
		this._messageTF.x = 25;
		this._messageTF.text = "系统提示";
		content.addChild(this._messageTF);
		this._messageTF.lineSpacing = 8;

		this._confirmBtn = new egret.Bitmap();
		this._confirmBtn.texture = RES.getRes("hall_json.confirmBtn");
		this._confirmBtn.x = 83; this._confirmBtn.y = 234;
		content.addChild(this._confirmBtn);
		this._confirmBtn.touchEnabled = true;

		this._confirmBtn2 = new egret.Bitmap();
		this._confirmBtn2.texture = RES.getRes("hall_json.confirmBtn");
		this._confirmBtn2.y = 234;
		content.addChild(this._confirmBtn2);
		this._confirmBtn2.touchEnabled = true;
		this._confirmBtn2.visible = false;

		this._cancelBtn = new egret.Bitmap();
		this._cancelBtn.texture = RES.getRes("hall_json.cancelBtn");
		this._cancelBtn.x = 350; this._cancelBtn.y = 234;
		content.addChild(this._cancelBtn);
		this._cancelBtn.touchEnabled = true;
		this._cancelBtn.visible = false;

		// this._confirmBtn.x = (GameGlobal.stageW - this._confirmBtn.width) * 0.5;
		// this._kuang.x = (GameGlobal.stageW - this._kuang.width) * 0.5;

		this._confirmBtn2.x = (content.width - this._confirmBtn2.width) * 0.5;
		// this._cancelBtn.x = GameGlobal.stageW / 2 - 336;

		content.x = (GameGlobal.stageW - content.width) >> 1;
		content.y = (GameGlobal.stageH - content.height) >> 1;

		this._confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {



			if (this._confirmCallBackFun != null) {
				this._confirmCallBackFun.call(this._thisObj);
			}
			this.hide();

		}, this);
		this._cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

			if (this._cancelCallBackFun != null) {
				this._cancelCallBackFun.call(this._thisObj);
			}
			this.hide();


		}, this);
		this._confirmBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {


			if (this._confirmCallBackFun != null) {
				this._confirmCallBackFun.call(this._thisObj);
			}
			this.hide();


		}, this);

		this.touchEnabled = true;
	}
}