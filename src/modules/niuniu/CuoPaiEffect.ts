/**
 * 警告框 / 确认框
 */
class CuoPaiEffect extends egret.Sprite
{
	private _bg:egret.Shape;
	private _gifPlayer:GifPlayer;
	
	private static _instance:CuoPaiEffect = null;
	public static getInstance():CuoPaiEffect
	{
		if(this._instance == null)
			this._instance = new CuoPaiEffect();
		return this._instance;
	}

	public static isShow:boolean = false;

	public constructor() {
		super();
		this.initView();
	}

	public show():void
	{
		GameGlobal.stage.addChild(this);
		CuoPaiEffect.isShow = true;

		var data:Object = {};
		data["msgType"] = NetAction.cuopai;
		SocketCommand.getInstance().send(data);
	}
	
	public hide():void
	{
		if(this.stage)
			GameGlobal.stage.removeChild(this);
		CuoPaiEffect.isShow = false;
		
	}

	private _effectMc:egret.MovieClip;

	private initView():void
	{
		this._bg = new egret.Shape();
		this._bg.graphics.beginFill(0, 0);
		this._bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
		this._bg.graphics.endFill();
		this.addChild(this._bg);

		// this._effectMc = DUtils.createMovieClipByName("cuopaiEffect");
		// this.addChild(this._effectMc);
		// this._effectMc.play(-1);
		// this._effectMc.x = (GameGlobal.stageW - 131) >>1;
		// this._effectMc.y = (GameGlobal.stageH - 99) >>1;
		this._gifPlayer = new GifPlayer();
		this._gifPlayer.play(-1);
		this.addChild(this._gifPlayer);
		this._gifPlayer.x = (GameGlobal.stageW - 619) >>1;
		this._gifPlayer.y = (GameGlobal.stageH - 450) >>1;

		this.touchEnabled = true;

		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		this.hide();

		// var data:Object = {};
		// data["msgType"] = NetAction.cuopai;
		// SocketCommand.getInstance().send(data);
	}
}