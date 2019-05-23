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
 *
 */
var DBitmapNumber = (function (_super) {
    __extends(DBitmapNumber, _super);
    function DBitmapNumber(value, xspacing, type) {
        if (xspacing === void 0) { xspacing = 10; }
        if (type === void 0) { type = 1; }
        var _this = _super.call(this) || this;
        _this._type = 1;
        _this._value = 1;
        _this._xspacing = 10; //水平间隔
        _this._value = value;
        _this._xspacing = xspacing;
        _this._type = type;
        _this.updateView();
        return _this;
    }
    DBitmapNumber.prototype.setValue = function (value) {
        this._value = value;
        this.updateView();
    };
    DBitmapNumber.prototype.updateView = function () {
        this.removeChildren();
        var valueStr = this._value.toString();
        if (this._value > 0)
            valueStr = "+" + valueStr;
        var len = valueStr.length;
        var numImg;
        for (var i = 0; i < len; i++) {
            var chatCode = valueStr.charAt(i);
            numImg = new NumImg();
            if (chatCode == "-" || chatCode == "+")
                numImg.setNum(this._type, "f");
            else
                numImg.setNum(this._type, Number(chatCode));
            numImg.x = i * this._xspacing;
            this.addChild(numImg);
        }
    };
    return DBitmapNumber;
}(egret.Sprite));
__reflect(DBitmapNumber.prototype, "DBitmapNumber");
//# sourceMappingURL=DBitmapNumber.js.map