var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 帧循环管理，统一管理帧循环事件，提高性能
 */
var EnterFrameManager = (function () {
    function EnterFrameManager() {
    }
    /**
     * 添加一个帧循环处理
     */
    EnterFrameManager.addEnterFrameHandler = function (handler, thisObj, param) {
        if (param === void 0) { param = null; }
        if (this._handlers.length == 0)
            this._sprite.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this, false, Number.MAX_VALUE);
        this._handlers.push(handler);
        this._params.push(param);
        this._thisObjs.push(thisObj);
    };
    EnterFrameManager.enterFrameHandler = function (evt) {
        this._adjustFlag = true;
        this._handlerCount = this._handlers.length;
        for (this._handlerIndex = 0; this._handlerIndex < this._handlerCount; this._handlerIndex++) {
            var handler = this._handlers[this._handlerIndex];
            var param = this._params[this._handlerIndex];
            param ? handler.apply(this._thisObjs[this._handlerIndex], param) : handler.apply(this._thisObjs[this._handlerIndex]);
        }
        this._adjustFlag = false;
    };
    EnterFrameManager.removeEnterFrameHandler = function (handler) {
        var index = this._handlers.indexOf(handler);
        if (index != -1) {
            this._handlers.splice(index, 1);
            this._params.splice(index, 1);
            this._thisObjs.splice(index, 1);
            if (this._adjustFlag) {
                this._handlerCount--;
                if (index <= this._handlerIndex)
                    this._handlerIndex--;
            }
            if (this._handlers.length == 0)
                this._sprite.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        }
    };
    EnterFrameManager.hasEnterFrameHandler = function (handler) {
        return this._handlers.indexOf(handler) != -1;
    };
    EnterFrameManager._sprite = new egret.Sprite();
    EnterFrameManager._handlers = new Array();
    EnterFrameManager._params = new Array();
    EnterFrameManager._handlerIndex = 0;
    EnterFrameManager._handlerCount = 0;
    EnterFrameManager._adjustFlag = false;
    EnterFrameManager._thisObjs = [];
    return EnterFrameManager;
}());
__reflect(EnterFrameManager.prototype, "EnterFrameManager");
//# sourceMappingURL=EnterFrameManager.js.map