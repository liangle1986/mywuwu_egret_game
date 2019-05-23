/**
 * ItemRender 基类
 * 具有点击行为
 */
class BaseItemClickRenderer extends eui.ItemRenderer
{
	protected startx: number;
	protected starty: number;
	protected touchCache: Object = {}; //可以改成hashmap
	protected SCALE_ROAT: number = 1.1; //缩放系数

	public constructor() {
		super();

		this.once(eui.UIEvent.CREATION_COMPLETE, this.onCreateComplete, this);
	}

	public onCreateComplete(evt: egret.Event): void 
	{     
//            this.addBtn(this.btnfight);  
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.itemTouchBegin,this);
		this.setLanguage();
	}

	/**
	 * 设置国际化语言
	 * 子类覆盖
	 */
	public setLanguage():void
	{
		
	}

	/**
	 * 添加可点击的显示对象
	 * @param tag 点击的显示对象
	 * @param scaleEnable 点击时 是否缩放
	 */
	protected addButton(tag: egret.DisplayObject,scaleEnable:boolean = false): void 
	{
		if(!this.touchCache[tag.hashCode]) 
		{
			this.touchCache[tag.hashCode] = [tag.x,tag.y,tag.scaleX,tag.scaleY,scaleEnable];
		}
	}

	protected removeButton(tag:egret.DisplayObject):void 
	{
		if(this.touchCache[tag.hashCode]) 
		{
			delete this.touchCache[tag.hashCode];
		}
	}

	/**
	 * 
	 */
	private itemTouchBegin(event: egret.TouchEvent): void 
	{
		this.startx = event.stageX;
		this.starty = event.stageY;
		var tag = event.target;
		var touchdata = this.touchCache[tag.hashCode];
		if(touchdata) 
		{
			this.addEventListener(egret.TouchEvent.TOUCH_END,this.itemTouchEnd,this);
			this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.itemTouchCancel,this);
			if(touchdata[4]) 
			{
				tag.scaleX = touchdata[2] * this.SCALE_ROAT;
				tag.scaleY = touchdata[3] * this.SCALE_ROAT;
				tag.x = touchdata[0] - ((this.SCALE_ROAT - 1) * tag.width >> 1);
				tag.y = touchdata[1] - ((this.SCALE_ROAT - 1) * tag.height >> 1);
			} 
		}
	}
	/**
	 * 
	 */
	private itemTouchEnd(event: egret.TouchEvent): void 
	{
		this.removeEventListener(egret.TouchEvent.TOUCH_END,this.itemTouchEnd,this);
		var px = this.startx - event.stageX;
		var py = this.starty - event.stageY;
		var tag = event.target;
		var touchdata = this.touchCache[tag.hashCode];
		if(touchdata) 
		{
			if(touchdata[4]){
				tag.x = touchdata[0];
				tag.y = touchdata[1];
				tag.scaleX = touchdata[2];
				tag.scaleY = touchdata[3];
			}              
			if(px < 20 && px > -20 && py < 20 && py > -20) {
				this.click(tag)
			}
		}
	}

	private itemTouchCancel(event:egret.TouchEvent):void 
	{
		this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.itemTouchCancel,this);
		var px = this.startx - event.stageX;
		var py = this.starty - event.stageY;
		var tag = event.target;
		var touchdata = this.touchCache[tag.hashCode];
		if(touchdata) {
			if(touchdata[4]){
				tag.x = touchdata[0];
				tag.y = touchdata[1];
				tag.scaleX = touchdata[2];
				tag.scaleY = touchdata[3];
			}
		}
	}

	/**
	 * 按钮点击  tag 点中的显示对象
	 * */
	protected click(tag: egret.DisplayObject): void 
	{
		//这里可以统一播放声音等
		
	}
}