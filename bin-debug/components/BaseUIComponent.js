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
var BaseUIComponent = (function (_super) {
    __extends(BaseUIComponent, _super);
    function BaseUIComponent() {
        var _this = _super.call(this) || this;
        /**
         * 生命周期结束
         */
        _this.initialized = false;
        _this.once(eui.UIEvent.COMPLETE, _this.createComplete, _this);
        _this.allbindButton = {};
        return _this;
    }
    BaseUIComponent.prototype.childrenCreated = function () {
    };
    /*该模块被创建完成后的回调函数*/
    BaseUIComponent.prototype.createComplete = function (event) {
        this.initialized = true;
        this.setLanguage();
    };
    /**设置国际化语言 子类覆盖*/
    BaseUIComponent.prototype.setLanguage = function () {
    };
    BaseUIComponent.prototype.unbindButton = function (btn, deleteKey) {
        if (deleteKey === void 0) { deleteKey = true; }
        if (btn) {
            btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
            if (deleteKey && this.allbindButton)
                delete this.allbindButton[btn.hashCode];
        }
    };
    /**
     * 绑定按钮点击  dispose 自动 unbindButton
     * @param image
     * @param isBtn 点击是是否缩放
     */
    BaseUIComponent.prototype.bindButton = function (image, isBtn) {
        if (isBtn === void 0) { isBtn = false; }
        image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
        this.allbindButton[image.hashCode] = image;
    };
    /**
     * 子类如果有bindButton, click事件覆盖次方法实现
     */
    BaseUIComponent.prototype.touchBindButtonHandler = function (clickTarget) {
        if (clickTarget instanceof eui.Button)
            SoundManager.instance.playSound("button_mp3");
    };
    BaseUIComponent.prototype.removeFromParent = function (isDispose) {
        if (isDispose === void 0) { isDispose = false; }
        if (this.parent)
            this.parent.removeChild(this);
        if (isDispose)
            this.dispose();
    };
    BaseUIComponent.prototype.touchHandler = function (event) {
        var tag = event.currentTarget;
        this.touchBindButtonHandler(tag);
    };
    BaseUIComponent.prototype.dispose = function () {
        for (var key in this.allbindButton) {
            this.unbindButton(this.allbindButton[key], false);
        }
        this.allbindButton = {};
        this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createComplete, this);
    };
    return BaseUIComponent;
}(eui.Component));
__reflect(BaseUIComponent.prototype, "BaseUIComponent");
//# sourceMappingURL=BaseUIComponent.js.map