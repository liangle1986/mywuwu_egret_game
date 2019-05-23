/**
 * 帧循环管理，统一管理帧循环事件，提高性能
 */
class EnterFrameManager {
	
	private static _sprite:egret.Sprite = new egret.Sprite();
	private static _handlers:Array<Function> = new Array<Function>();
	private static _params:Array<any> = new Array<any>();

	private static _handlerIndex:number = 0;
	private static _handlerCount:number = 0;
	private static _adjustFlag:boolean = false;
	private static _thisObjs: Array<any> = [];
	/**
	 * 添加一个帧循环处理
	 */
	public static addEnterFrameHandler(handler:Function, thisObj: any, param: any = null):void
	{
		if (this._handlers.length == 0)
			this._sprite.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this, false, Number.MAX_VALUE);

		this._handlers.push(handler);
		this._params.push(param);
		this._thisObjs.push(thisObj);
	}

	private static enterFrameHandler(evt:egret.Event):void
	{
		this._adjustFlag = true;
		this._handlerCount = this._handlers.length;
		for (this._handlerIndex = 0; this._handlerIndex < this._handlerCount; this._handlerIndex++)
		{
			var handler:Function = this._handlers[this._handlerIndex];
			var param:any = this._params[this._handlerIndex];
			param ? handler.apply(this._thisObjs[this._handlerIndex], param) : handler.apply(this._thisObjs[this._handlerIndex]);
		}
		this._adjustFlag = false;
	}

	public static removeEnterFrameHandler(handler:Function):void
	{
		var index:number = this._handlers.indexOf(handler);
		if (index != -1)
		{
			this._handlers.splice(index, 1);
			this._params.splice(index, 1);
			this._thisObjs.splice(index, 1);

			if (this._adjustFlag)
			{
				this._handlerCount--;
				if (index <= this._handlerIndex)
					this._handlerIndex--;
			}

			if (this._handlers.length == 0)
				this._sprite.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
		}
	}

	public static hasEnterFrameHandler(handler:Function):boolean
	{
		return this._handlers.indexOf(handler) != -1;
	}

}