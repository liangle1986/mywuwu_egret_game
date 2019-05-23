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
 * 复选框
 */
var DCheckBox = (function (_super) {
    __extends(DCheckBox, _super);
    function DCheckBox() {
        var _this = _super.call(this) || this;
        _this._selected = false;
        _this._chkImgName = "hall_json.checkbox_default";
        _this._chkImgName2 = "hall_json.checkbox_select";
        _this.initView();
        return _this;
    }
    Object.defineProperty(DCheckBox.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            this._skin.texture = this._selected ? RES.getRes(this._chkImgName2) : RES.getRes(this._chkImgName);
        },
        enumerable: true,
        configurable: true
    });
    DCheckBox.prototype.setLabel = function (label, isImg, x, y) {
        if (isImg === void 0) { isImg = true; }
        if (x === void 0) { x = 1; }
        if (y === void 0) { y = -1; }
        if (isImg) {
            this._label.texture = RES.getRes(label);
            this._label.x = x;
            this._label.y = y;
        }
        else {
            if (this._labelTF == null)
                this._labelTF = new egret.TextField();
            this._labelTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
            this._labelTF.textColor = 0x8a4b0b;
            this._labelTF.size = 21;
            this._labelTF.textAlign = egret.HorizontalAlign.LEFT;
            this._labelTF.x = x;
            this._labelTF.y = y;
            this._labelTF.text = label;
            this.addChild(this._labelTF);
            this._touchAreShape.graphics.clear();
            this._touchAreShape.graphics.beginFill(0);
            this._touchAreShape.graphics.drawRect(0, 0, this._labelTF.textWidth + this._label.x + this._skin.width, this._skin.height);
            this._touchAreShape.graphics.endFill();
            // this._touchAreShape.width = this._labelTF.textWidth+this._label.x+this._skin.width+10;
            // this._touchAreShape.y = -this._skin.height*2*0.5;
            // this._touchAreShape.x = -this._touchAreShape.width*0.5;
            this._touchAreShape.visible = true;
            this.addChild(this._touchAreShape);
        }
    };
    DCheckBox.prototype.setSkin = function (chkImgName, chkImgName2) {
        this._chkImgName = chkImgName;
        this._chkImgName2 = chkImgName2;
        this._skin.texture = RES.getRes(chkImgName);
    };
    DCheckBox.prototype.initView = function () {
        var _this = this;
        this.touchEnabled = true;
        this._skin = new egret.Bitmap();
        this._skin.texture = RES.getRes(this._chkImgName);
        this.addChild(this._skin);
        this._skin.touchEnabled = true;
        this._label = new egret.Bitmap();
        this._label.x = 34;
        this._label.y = 0;
        this.addChild(this._label);
        this._label.touchEnabled = true;
        this._label.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // AlertView.getInstance().show(text, AlertView.ALERT_MODE);
            XieyiView.getInstance().showView();
        }, this);
        this._touchAreShape = new egret.Sprite();
        this._touchAreShape.graphics.beginFill(0);
        this._touchAreShape.graphics.drawRect(0, 0, 100, this._skin.height);
        this._touchAreShape.graphics.endFill();
        this.addChild(this._touchAreShape);
        this._touchAreShape.alpha = 0;
        // this._touchAreShape.y = -this._skin.height*2*0.5;
        // this._touchAreShape.x = -50;
        this._touchAreShape.visible = false;
        this._touchAreShape.touchEnabled = true;
        this._skin.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.selected = !_this.selected;
            _this.dispatchEvent(new DEvent(GameEventManager.SELECTED));
        }, this);
        this._touchAreShape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.selected = !_this.selected;
            _this.dispatchEvent(new DEvent(GameEventManager.SELECTED));
        }, this);
    };
    return DCheckBox;
}(DComponent));
__reflect(DCheckBox.prototype, "DCheckBox");
//# sourceMappingURL=DCheckBox.js.map