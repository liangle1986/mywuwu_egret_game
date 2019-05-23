/**
 * 弹窗面板基类
 * @author 
 *
 */
class AbstractIFrame extends egret.Sprite{
    
    private _iframeName:string;
    public getIframeName():string
    {
        return this._iframeName;
    }
    
    public setIframeName(value:string):void
    {
        this._iframeName = value;
    }
    
    protected _frameWidth: number;
    protected _frameHeight:number;
    
    public constructor() {
        super();
        this.touchEnabled = true;
    }
    
    private _modal:boolean = true;
    
    public setModal(b:boolean):void
    {
        this._modal = b;
        this._drawModalArea();
    }
    
    public isModal():boolean
    {
        return this._modal;
    }
    
//        private _knockout:Boolean = false; //模式填充时是否需要挖空弹窗实体区域
    
    private _drawModalArea(): void
    { 
        /*if (!_modal)
            {
            graphics.clear();
            return;
        }
        var fillRect:Rectangle = new Rectangle(-intX, -intY, TFGlobal.stageWidth, TFGlobal.stageHeight);
        var knockoutRect:Rectangle = _knockout ? new Rectangle(0, 0, getWidth(), getHeight()) : null;
        GraphicsUtils.drawRect(graphics, fillRect, _modalColor, _modalAlpha, true, knockoutRect);*/
    }
    
    public onShow():void
    {
//            DGlobal.stage.addEventListener(Event.RESIZE, onStageSizeChanged);
//            onStageSizeChanged();
    }
    
    public onShowComplete():void
    {
    }
    
    public onStop():void
    {
//            DGlobal.stage.removeEventListener(Event.RESIZE, onStageSizeChanged);
    }
    
    public onStopComplete():void
    {
    }
    
    public getSelf():AbstractIFrame
    {
        return this;
    }
    
    public getWidth():number
    {
        return this._frameWidth;
    }
    
    public getHeight():number
    {
        return this._frameHeight;
    }
    
    public showNewbeeGuide():boolean
    {
        return false;
    }
    
}