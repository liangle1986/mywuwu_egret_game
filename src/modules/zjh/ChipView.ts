class ChipView extends egret.Sprite
{

	private _chipImg:egret.Bitmap;

	public setValue(value:number):void
	{
		this._chipImg.texture = RES.getRes("game_json.chip"+value);
	}

	public constructor() {
		super();

		this._chipImg = new egret.Bitmap();
		this._chipImg.texture = RES.getRes("game_json.chip1");
		this.addChild(this._chipImg);

		this._chipImg.anchorOffsetX = this._chipImg.width*0.5;
		this._chipImg.anchorOffsetY = this._chipImg.height * 0.5;
		this._chipImg.x = this._chipImg.width*0.5;
		this._chipImg.y = this._chipImg.height * 0.5;
	}
}