/**
 * 窗口界面基类
 */
class IFrameBase extends BaseUIComponent
{
	/** 缓动时间间隔 */
	public static TWEEN_DURATION: number = 300;

	/**预加载资源组，不为空的话则先加载资源 */
	public groupNames: string[];
	/**关闭是否清理 */
	public closeDispose: boolean;
	/**是否全屏 */
	public isFullScene: boolean = false;
	/** */
	public UIClass: any;
	/**开启该模块的时候传入的参数*/
	public uiOpenData: any = null;
	protected iframeWidth:number = -1;
	protected iframeHeight:number = -1;

	public constructor() {
		super();
		
		this.touchEnabled = true;
		this.horizontalCenter = 0;
        this.verticalCenter = 0;
		this.closeDispose = true;
	}

	public childrenCreated():void
	{
		this.showComplete();
	}

	public close():void
	{
		GameGlobal.iframeLayer.hideIFrame(this);
	}

	public createComplete(event: egret.Event): void 
	{
		super.createComplete(event);
		// this.addToParent();
		
		if(this["maskBg"])
			this["maskBg"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		this.close();

	}

	public addToParent(): void 
	{
		if (this.parent == null) 
		{
			GameGlobal.stage.addChild(this);				
		}
		// if(this.initialized) this.opening();
		this.tweenShow();
	}

	public show():void
	{

	}

	//打开界面时处理
	// protected opening():void 
	// {

	// 	//比如重新注册事件侦听
	// }
	/**缓动显示 */
	public tweenShow(): void
	{
		this.show();
		
		this.alpha = 1;
		if(this["mainView"])
		{
			this["mainView"].scaleX = this["mainView"].scaleY = 0;
			// if(this.iframeHeight == -1)
			// 	this.iframeHeight = this.height;
			// if(this.iframeWidth == -1)
			// 	this.iframeWidth = this.width;
			
			// this.x = (GameGlobal.stage.stageWidth - this.width) >> 1;
			// this.y = (GameGlobal.stage.stageHeight - this.height) >> 1;

			// var nextX:number = (GameGlobal.stage.stageWidth - this.iframeWidth) >> 1;
			// var nextY:number = (GameGlobal.stage.stageHeight - this.iframeHeight) >> 1;
			egret.Tween.removeTweens(this);
			egret.Tween.get(this["mainView"]).to({scaleX: 1,scaleY: 1,alpha: 1},IFrameBase.TWEEN_DURATION, egret.Ease.backOut).call(()=>{

				this.tweenShowComplete();

			},this);
		}
		else
		{
			this.x = GameGlobal.stage.stageWidth >> 1;
			this.y = GameGlobal.stage.stageHeight >> 1;
			this.scaleX = 0;
			this.scaleY = 0;
			var nextX:number = (GameGlobal.stage.stageWidth - this.iframeWidth) >> 1;
            var nextY:number = (GameGlobal.stage.stageHeight - this.iframeHeight) >> 1;
            egret.Tween.removeTweens(this);
            egret.Tween.get(this).to({ x: nextX,y: nextY,scaleX: 1,scaleY: 1,alpha: 1},IFrameBase.TWEEN_DURATION, egret.Ease.backOut).call(()=>{

               this.tweenShowComplete();

            },this);
		}
		
	}
	protected tweenShowComplete():void
	{

	}
	//从显示对象移除 子类覆盖次方法
	public removeParent(): void 
	{
		this.tweenRemove();
	}
	/**缓动隐藏 */
	public tweenRemove(): void
	{
		this.alpha = 1;
		egret.Tween.removeTweens(this);
		egret.Tween.get(this).to({alpha:0},200).call(this.tweenRemoveComp,this);
	}
	/**缓动隐藏结束动画 */
	protected tweenRemoveComp(): void
	{
		this.removeFromParent(true);
	}
	//析构回调
	public dispose(): void 
	{
		// if (this.groupNames) 
		// {
		// 	for (var i: number = 0; i < this.groupNames.length; i++)
		// 	{
		// 		RES.destroyRes(this.groupNames[i],false);
		// 	}
		// }
		// this.UIClass = null;
		super.dispose();
	}

	protected init():void
	{
		this.initialized = true;
		// this.showComplete();
	}
	protected _bg:egret.Bitmap;
	protected _closeBtn:DButton;
	protected _titleImg:egret.Bitmap;
	
	protected showComplete():void
	{
		this._bg = new egret.Bitmap();
		this._bg.texture = RES.getRes("hall_json.panel_bg");
		this.addChild(this._bg);
		this._bg.scale9Grid = new egret.Rectangle(20, 66, 120, 70);
	}
}