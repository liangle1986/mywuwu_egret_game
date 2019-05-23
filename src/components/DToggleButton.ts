class DToggleButton extends DComponent
{
	private _bg:egret.Bitmap;
	private _bg2:egret.Bitmap;
	private _pointImg:egret.Bitmap;
	private _offImg:egret.Bitmap;

	public constructor() {
		super();

		this.initView();
	}

	private _selected:boolean = true;
	public get isSelected():boolean
	{
		return this._selected;
	}

	private initView():void
	{
		this._bg = new egret.Bitmap();
		this.addChild(this._bg);
		this._bg.texture = RES.getRes("ui_json.soundOn");

		this._bg2 = new egret.Bitmap();
		this.addChild(this._bg2);
		this._bg2.texture = RES.getRes("ui_json.soundOff");
		this._bg2.visible = false;

		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		this._selected = !this._selected;
		if(this._selected)
		{
			this._bg.visible = true; this._bg2.visible = false;
		}
		else
		{
			this._bg.visible = false; this._bg2.visible = true;
		}
		this.dispatchEvent(new DEvent(DEvent.CHANGE));
	}
}