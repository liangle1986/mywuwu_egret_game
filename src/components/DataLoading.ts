/**
 * 加载数据图标
 */
class DataLoading extends egret.Sprite
{
	private _icon:egret.MovieClip; //loading图标
	private _bg:egret.Shape;
	private _icon2:egret.Bitmap;

	private static _instance:DataLoading = null;
	public static getInstance():DataLoading
	{
		if(this._instance == null)
			this._instance = new DataLoading();
		return this._instance;
	}

	public constructor() {
		super();
		this.initView();
	}

	public show():void
	{
		GameGlobal.stage.addChild(this);
	}
	public hide():void
	{
		if(this.stage)
			GameGlobal.stage.removeChild(this);
	}

	private initView():void
	{
		this._bg = new egret.Shape();
		this._bg.graphics.beginFill(0, 0.1);
		this._bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
		this._bg.graphics.endFill();
		this.addChild(this._bg);

		this.touchEnabled = true;

		this._icon2 = new egret.Bitmap();
		this._icon2.texture = RES.getRes("hall_json.dataLoading");
		this.addChild(this._icon2);
		this._icon2.anchorOffsetX = this._icon2.width * 0.5;
		this._icon2.anchorOffsetY = this._icon2.height * 0.5;
		this._icon2.x = GameGlobal.stage.stageWidth * 0.5;
		this._icon2.y = GameGlobal.stage.stageHeight * 0.5;

		egret.Tween.get(this._icon2,{ loop: true }).to({ rotation: 360 },800);
	}
}