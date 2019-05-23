/**
 * 协议
 */
class XieyiView extends IFrameBase {

    private static _instance: XieyiView = null;
    public static getInstance(): XieyiView {
        if (this._instance == null)
            this._instance = new XieyiView();
        return this._instance;
    }
    public constructor() {
        super();

        this.skinName = "XieyiViewSkin";
        this.name = "XieyiView";
    }

    private xieyiScroller: eui.Scroller;
    private xieyiText: eui.Label;
    private xieyiButton: eui.Image;
    private xieyiTitle:eui.Image;

    public showView(text: string = GameGlobal.xieyiText): void {
        this.xieyiText.text = text;
        GameGlobal.stage.addChild(this);
        this.xieyiButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    }

    public close() {
        if (this.stage)
            GameGlobal.stage.removeChild(this);
        this.xieyiText.text = '';
    }

}