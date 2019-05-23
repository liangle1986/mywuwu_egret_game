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
 * 协议
 */
var XieyiView = (function (_super) {
    __extends(XieyiView, _super);
    function XieyiView() {
        var _this = _super.call(this) || this;
        _this.skinName = "XieyiViewSkin";
        _this.name = "XieyiView";
        return _this;
    }
    XieyiView.getInstance = function () {
        if (this._instance == null)
            this._instance = new XieyiView();
        return this._instance;
    };
    XieyiView.prototype.showView = function (text) {
        if (text === void 0) { text = GameGlobal.xieyiText; }
        this.xieyiText.text = text;
        GameGlobal.stage.addChild(this);
        this.xieyiButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    };
    XieyiView.prototype.close = function () {
        if (this.stage)
            GameGlobal.stage.removeChild(this);
        this.xieyiText.text = '';
    };
    XieyiView._instance = null;
    return XieyiView;
}(IFrameBase));
__reflect(XieyiView.prototype, "XieyiView");
//# sourceMappingURL=XieyiView.js.map