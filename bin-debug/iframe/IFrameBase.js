var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 窗口界面基类
 */
var IFrameBase = (function (_super) {
    __extends(IFrameBase, _super);
    function IFrameBase() {
        var _this = _super.call(this) || this;
        /**是否全屏 */
        _this.isFullScene = false;
        /**开启该模块的时候传入的参数*/
        _this.uiOpenData = null;
        _this.iframeWidth = -1;
        _this.iframeHeight = -1;
        _this.touchEnabled = true;
        _this.horizontalCenter = 0;
        _this.verticalCenter = 0;
        _this.closeDispose = true;
        return _this;
    }
    IFrameBase.prototype.childrenCreated = function () {
        this.showComplete();
    };
    IFrameBase.prototype.close = function () {
        GameGlobal.iframeLayer.hideIFrame(this);
    };
    IFrameBase.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
        // this.addToParent();
        if (this["maskBg"])
            this["maskBg"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
    };
    IFrameBase.prototype.onTouchTapHandle = function (evt) {
        this.close();
    };
    IFrameBase.prototype.addToParent = function () {
        if (this.parent == null) {
            GameGlobal.stage.addChild(this);
        }
        // if(this.initialized) this.opening();
        this.tweenShow();
    };
    IFrameBase.prototype.show = function () {
    };
    //打开界面时处理
    // protected opening():void 
    // {
    // 	//比如重新注册事件侦听
    // }
    /**缓动显示 */
    IFrameBase.prototype.tweenShow = function () {
        var _this = this;
        this.show();
        this.alpha = 1;
        if (this["mainView"]) {
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
            egret.Tween.get(this["mainView"]).to({ scaleX: 1, scaleY: 1, alpha: 1 }, IFrameBase.TWEEN_DURATION, egret.Ease.backOut).call(function () {
                _this.tweenShowComplete();
            }, this);
        }
        else {
            this.x = GameGlobal.stage.stageWidth >> 1;
            this.y = GameGlobal.stage.stageHeight >> 1;
            this.scaleX = 0;
            this.scaleY = 0;
            var nextX = (GameGlobal.stage.stageWidth - this.iframeWidth) >> 1;
            var nextY = (GameGlobal.stage.stageHeight - this.iframeHeight) >> 1;
            egret.Tween.removeTweens(this);
            egret.Tween.get(this).to({ x: nextX, y: nextY, scaleX: 1, scaleY: 1, alpha: 1 }, IFrameBase.TWEEN_DURATION, egret.Ease.backOut).call(function () {
                _this.tweenShowComplete();
            }, this);
        }
    };
    IFrameBase.prototype.tweenShowComplete = function () {
    };
    //从显示对象移除 子类覆盖次方法
    IFrameBase.prototype.removeParent = function () {
        this.tweenRemove();
    };
    /**缓动隐藏 */
    IFrameBase.prototype.tweenRemove = function () {
        this.alpha = 1;
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ alpha: 0 }, 200).call(this.tweenRemoveComp, this);
    };
    /**缓动隐藏结束动画 */
    IFrameBase.prototype.tweenRemoveComp = function () {
        this.removeFromParent(true);
    };
    //析构回调
    IFrameBase.prototype.dispose = function () {
        // if (this.groupNames) 
        // {
        // 	for (var i: number = 0; i < this.groupNames.length; i++)
        // 	{
        // 		RES.destroyRes(this.groupNames[i],false);
        // 	}
        // }
        // this.UIClass = null;
        _super.prototype.dispose.call(this);
    };
    IFrameBase.prototype.init = function () {
        this.initialized = true;
        // this.showComplete();
    };
    IFrameBase.prototype.showComplete = function () {
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes("hall_json.panel_bg");
        this.addChild(this._bg);
        this._bg.scale9Grid = new egret.Rectangle(20, 66, 120, 70);
    };
    /** 缓动时间间隔 */
    IFrameBase.TWEEN_DURATION = 300;
    return IFrameBase;
}(BaseUIComponent));
__reflect(IFrameBase.prototype, "IFrameBase");
//# sourceMappingURL=IFrameBase.js.map