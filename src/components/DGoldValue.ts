/**
 * 金币 / 钻石 显示条
 */
class DGoldValue extends egret.Sprite
{
	private _iconImg:egret.Bitmap;
	private _valueTF:egret.TextField;
	private _addBtn:egret.Bitmap;
	private _bg:egret.Bitmap;

	public static GOLD:number = 0;
	public static DIAMOND:number = 1;

	public constructor() {
		super();

		this.initView();
	}

	public setValue(value:number):void
	{
		this._valueTF.text = value.toString();
	}

	public setType(type:number = 0):void
	{
		if(type == DGoldValue.DIAMOND)
		{
			this._iconImg.texture = RES.getRes("main_json.diamondIcon");
		}
		else
		{
			this._iconImg.texture = RES.getRes("main_json.moneyIcon");
		}
	}

	private initView():void
	{
		this._bg = new egret.Bitmap();
		this.addChild(this._bg);
		this._bg.x = 5; this._bg.y = 1;
		this._bg.texture = RES.getRes("main_json.goldValueBg");

		this._iconImg = new egret.Bitmap();
		this.addChild(this._iconImg);
		this._iconImg.texture = RES.getRes("main_json.moneyIcon");
		this._iconImg.x = 0; this._iconImg.y = 1;

		this._valueTF = new egret.TextField();
		this._valueTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._valueTF.size = 24;
		this._valueTF.textColor = 0xffffff;
		this.addChild(this._valueTF);
		this._valueTF.textAlign = egret.HorizontalAlign.CENTER;
		this._valueTF.text = "0";
		this._valueTF.width = 126;
		this._valueTF.x = 42; this._valueTF.y = 7;

		this._addBtn = new egret.Bitmap();
		this._addBtn.touchEnabled = true;
		this.addChild(this._addBtn);
		this._addBtn.x = 162; this._addBtn.y = 0;
		this._addBtn.texture = RES.getRes("main_json.main_addicon");
		this._addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		AlertView.getInstance().show("开发中，敬请期待！");
	}
}