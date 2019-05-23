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
var DButton = (function (_super) {
    __extends(DButton, _super);
    function DButton(skinResName, disableResName) {
        if (disableResName === void 0) { disableResName = ""; }
        var _this = _super.call(this) || this;
        _this._disableSkinName = "";
        _this._defaultSkinName = "";
        _this._isEnabled = true;
        _this._defaultSkinName = skinResName;
        _this._disableSkinName = disableResName;
        _this._skin = new egret.Bitmap(RES.getRes(skinResName));
        _this.addChild(_this._skin);
        _this.touchEnabled = true;
        _this.touchChildren = false;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchTap, _this);
        return _this;
    }
    DButton.prototype.onTouchTap = function (evt) {
        SoundManager.instance.playSound("button_mp3");
    };
    DButton.prototype.setEnabled = function (value) {
        this._isEnabled = value;
        if (this._isEnabled) {
            this._skin.texture = RES.getRes(this._defaultSkinName);
        }
        else {
            this._skin.texture = RES.getRes(this._disableSkinName);
        }
        this.touchEnabled = this.touchChildren = value;
    };
    DButton.prototype.isEnabled = function () {
        return this._isEnabled;
    };
    /**
     *
     */
    DButton.prototype.setSkin = function (skinResName, disableSkinName) {
        if (disableSkinName === void 0) { disableSkinName = ""; }
        this._defaultSkinName = skinResName;
        this._disableSkinName = disableSkinName;
        this._skin.texture = RES.getRes(skinResName);
        this.setEnabled(this._isEnabled);
    };
    return DButton;
}(DComponent));
__reflect(DButton.prototype, "DButton");
//# sourceMappingURL=DButton.js.map