class GifPlayer extends egret.Sprite
{

	private _img:egret.Bitmap;
	private _frameIndex:number = 1;

	private _lastTime:number = 0;
	private _fpsTimer:number = 1000/24;

	public constructor() {
		super();

		this.initView();
	}

	private _intervalId:number = -1;

	private _frameTotal:number = 15;
	public setFrameTotal(value:number):void
	{
		this._frameTotal = value;
	}

	private _prefix:string = "";
	public setFramePrefix(str:string):void
	{
		this._prefix = str;
	}

	private _playCount:number = -1;
	public play(count:number = -1):void
	{
		this._playCount = count;
		this.stop();
		this._frameIndex = 0;
		this.onInterval();

		egret.clearInterval(this._intervalId);
		this._intervalId = egret.setInterval(this.onInterval, this, this._fpsTimer);
	}

	public stop():void
	{
		egret.clearInterval(this._intervalId);
	}

	private initView():void
	{	
		this._img = new egret.Bitmap();
		this._img.texture = RES.getRes(this._prefix+"1_png");
		this.addChild(this._img);
	}

	private onInterval():void
	{
		this._frameIndex++;
		if(this._frameIndex > this._frameTotal)
		{
			this._frameIndex = 1;

			if(this._playCount == 1)
			{
				if(this.parent != null)
					this.parent.removeChild(this);
				
				egret.clearInterval(this._intervalId);
			}

		}
		
		if(this._frameIndex < 10)
			this._img.texture = RES.getRes(this._prefix+ this._frameIndex+"_png");
		else
			this._img.texture = RES.getRes(this._prefix + this._frameIndex+"_png");
		
	}
}