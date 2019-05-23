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
var DToggleButton = (function (_super) {
    __extends(DToggleButton, _super);
    function DToggleButton() {
        var _this = _super.call(this) || this;
        _this._selected = true;
        _this.initView();
        return _this;
    }
    Object.defineProperty(DToggleButton.prototype, "isSelected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    DToggleButton.prototype.initView = function () {
        this._bg = new egret.Bitmap();
        this.addChild(this._bg);
        this._bg.texture = RES.getRes("ui_json.soundOn");
        this._bg2 = new egret.Bitmap();
        this.addChild(this._bg2);
        this._bg2.texture = RES.getRes("ui_json.soundOff");
        this._bg2.visible = false;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    DToggleButton.prototype.onTouchTap = function (evt) {
        this._selected = !this._selected;
        if (this._selected) {
            this._bg.visible = true;
            this._bg2.visible = false;
        }
        else {
            this._bg.visible = false;
            this._bg2.visible = true;
        }
        this.dispatchEvent(new DEvent(DEvent.CHANGE));
    };
    return DToggleButton;
}(DComponent));
__reflect(DToggleButton.prototype, "DToggleButton");
//# sourceMappingURL=DToggleButton.js.map