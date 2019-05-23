class BaseUIComponent extends eui.Component
{
	/**
	 * 生命周期结束
	 */ 
	public initialized: boolean = false;
	/**
	 * 记录全部绑定按钮 dispose 的时候移除
	 * */
	public allbindButton: Object;
	public constructor() {
		super();
		this.once(eui.UIEvent.COMPLETE, this.createComplete, this);
		this.allbindButton = {};
	}
	protected childrenCreated():void
	{
		
	}
	/*该模块被创建完成后的回调函数*/
	public createComplete(event: egret.Event): void {
		this.initialized = true;
		this.setLanguage();
	}
	/**设置国际化语言 子类覆盖*/
	public setLanguage():void
	{
		
	}

	protected unbindButton(btn: egret.DisplayObject,deleteKey: boolean = true): void 
	{
		if(btn) 
		{
			btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
			if(deleteKey && this.allbindButton)
				delete this.allbindButton[btn.hashCode];
		}
	}
	
	/**
	 * 绑定按钮点击  dispose 自动 unbindButton
	 * @param image
	 * @param isBtn 点击是是否缩放
	 */
	protected bindButton(image: egret.DisplayObject, isBtn: boolean = false): void 
	{
		image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
		this.allbindButton[image.hashCode] = image;
	}
	
	/**
	 * 子类如果有bindButton, click事件覆盖次方法实现
	 */
	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		if(clickTarget instanceof eui.Button)
			SoundManager.instance.playSound("button_mp3");
	}

	public removeFromParent(isDispose:boolean = false): void 
	{
		if(this.parent) this.parent.removeChild(this);
		if(isDispose) this.dispose();
    }

	protected touchHandler(event: egret.TouchEvent): void 
	{
		var tag: egret.DisplayObject = event.currentTarget;
		this.touchBindButtonHandler(tag);
	}

	public dispose():void
	{
		for(var key in this.allbindButton)
		{
            this.unbindButton(this.allbindButton[key],false);
		}
		this.allbindButton = {};
		this.removeEventListener(eui.UIEvent.CREATION_COMPLETE,this.createComplete,this);
	}
}