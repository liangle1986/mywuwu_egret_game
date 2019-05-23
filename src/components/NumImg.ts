/**
 * 单张图
 */
class NumImg extends egret.Sprite
{
	private _img:egret.Bitmap;
	private _type:number = 1;

	public constructor() {
		super();

		this.initView();
	}

	private initView():void
	{
		this._img = new egret.Bitmap();
		this.addChild(this._img);
	}

	private _num:any;
	public setNum(type:number, value:any):void
	{
		this._num = value;
		this._img.texture = RES.getRes("num"+ type + "_json.num"+type+"_"+value);
	}
}