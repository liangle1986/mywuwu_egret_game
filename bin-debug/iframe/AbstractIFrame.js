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
 * 弹窗面板基类
 * @author
 *
 */
var AbstractIFrame = (function (_super) {
    __extends(AbstractIFrame, _super);
    function AbstractIFrame() {
        var _this = _super.call(this) || this;
        _this._modal = true;
        _this.touchEnabled = true;
        return _this;
    }
    AbstractIFrame.prototype.getIframeName = function () {
        return this._iframeName;
    };
    AbstractIFrame.prototype.setIframeName = function (value) {
        this._iframeName = value;
    };
    AbstractIFrame.prototype.setModal = function (b) {
        this._modal = b;
        this._drawModalArea();
    };
    AbstractIFrame.prototype.isModal = function () {
        return this._modal;
    };
    //        private _knockout:Boolean = false; //模式填充时是否需要挖空弹窗实体区域
    AbstractIFrame.prototype._drawModalArea = function () {
        /*if (!_modal)
            {
            graphics.clear();
            return;
        }
        var fillRect:Rectangle = new Rectangle(-intX, -intY, TFGlobal.stageWidth, TFGlobal.stageHeight);
        var knockoutRect:Rectangle = _knockout ? new Rectangle(0, 0, getWidth(), getHeight()) : null;
        GraphicsUtils.drawRect(graphics, fillRect, _modalColor, _modalAlpha, true, knockoutRect);*/
    };
    AbstractIFrame.prototype.onShow = function () {
        //            DGlobal.stage.addEventListener(Event.RESIZE, onStageSizeChanged);
        //            onStageSizeChanged();
    };
    AbstractIFrame.prototype.onShowComplete = function () {
    };
    AbstractIFrame.prototype.onStop = function () {
        //            DGlobal.stage.removeEventListener(Event.RESIZE, onStageSizeChanged);
    };
    AbstractIFrame.prototype.onStopComplete = function () {
    };
    AbstractIFrame.prototype.getSelf = function () {
        return this;
    };
    AbstractIFrame.prototype.getWidth = function () {
        return this._frameWidth;
    };
    AbstractIFrame.prototype.getHeight = function () {
        return this._frameHeight;
    };
    AbstractIFrame.prototype.showNewbeeGuide = function () {
        return false;
    };
    return AbstractIFrame;
}(egret.Sprite));
__reflect(AbstractIFrame.prototype, "AbstractIFrame");
//# sourceMappingURL=AbstractIFrame.js.map