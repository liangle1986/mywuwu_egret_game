class DImage extends egret.Sprite
{
	private _width:number = -1;
	private _height:number = -1;
	private _img:egret.Bitmap;
	private _maskImg:egret.Bitmap;

	private _defaultImgRes:string = "";

	public set defaultImg(imgRes:string)
	{
		this._defaultImgRes = imgRes;
		
		this._img.texture = RES.getRes(imgRes);
		this._maskImg.texture = RES.getRes(imgRes);
	}

	public clear():void
	{
		this.defaultImg = this._defaultImgRes;
	}

	public getWidth():number
	{
		return this._width;
	}

	public getHeight():number
	{
		return this._height;
	}

	public  setWidth(value:number):void
	{
		this._width = value;

		if(value != -1)
		{
			this._img.width = value;
		}
	}

	public  setHeight(value:number):void
	{
		this._height = value;

		if(value != -1)
		{
			this._img.height = value;
		}
	}

	public constructor(width:number = -1, height:number = -1, defaultImgRes:string = "hall_json.testface") 
	{
		super();
		this._width = width;
		this._height = height;

		this._defaultImgRes = defaultImgRes;

		this._img = new egret.Bitmap();
		this._img.texture = RES.getRes(defaultImgRes);
		this.addChild(this._img);

		this._maskImg = new egret.Bitmap();
		this._maskImg.texture = RES.getRes(defaultImgRes);
		this.addChild(this._maskImg);
		
		this._img.mask = this._maskImg;

		if(width != -1 && (height != -1))
		{
			this._img.width = width;
			this._img.height = height;
		}
	}

	private _url:string;
	public load(url:string):void
	{
		this._url = url == null?"":url;
		
		var imageLoader:egret.ImageLoader = new egret.ImageLoader();
		imageLoader.addEventListener(egret.Event.COMPLETE,this.imageComplete,this);
		imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadFaceError,this);
		imageLoader.load(this._url);
	}

	private onLoadFaceError(evt:egret.IOErrorEvent):void
    {
        console.log("load face ioerror");
    }
    
    private imageComplete(evt:egret.Event):void
    {
		console.log("load face complete");
        this._img.texture = evt.target.data;
        this._img.width = this._width;
        this._img.height = this._height;
    }
}