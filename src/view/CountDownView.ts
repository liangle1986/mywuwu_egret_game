/**
 * 倒计时
 */
class CountDownView extends egret.Sprite
{
	public constructor() {
		super();

		this.initView();
	}

	private _icon:egret.Bitmap;
	private _tf:egret.TextField;

	private _timer:egret.Timer;
	private _leftTime:number = 10;

	public start(value:number = 10):void
	{
		this._leftTime = value;
		this._tf.text = this._leftTime.toString();
		
		this._timer.stop();
		this._timer.reset();
		this._timer.start();

		this.visible = true;
	}

	public stop():void
	{
		this._timer.stop();
		this._timer.reset();
		this._timer.start();

		this.visible = false;
	}

	private initView():void
	{
		this._icon = new egret.Bitmap();
		this._icon.texture = RES.getRes("game_json.bull_clock");
		this.addChild(this._icon);

		this._tf = new egret.TextField();
		this._tf.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._tf.size = 28;
		this._tf.textColor = 0xffffff;
		this._tf.textAlign = egret.HorizontalAlign.CENTER;
		this._tf.width = this._icon.width;
		this.addChild(this._tf);
		this._tf.x = 3;
		this._tf.y = 16;
		this._tf.text = "0";

		this.visible = false;

		this._timer = new egret.Timer(1000);
		this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandle, this);
	}

	private onTimerHandle(ev:egret.TimerEvent):void
	{
		this._leftTime--;
		this._tf.text = this._leftTime.toString();
		if(this._leftTime <=0)
		{
			this.stop();
		}
	}
}