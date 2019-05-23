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
 * 单张图
 */
var NumImg = (function (_super) {
    __extends(NumImg, _super);
    function NumImg() {
        var _this = _super.call(this) || this;
        _this._type = 1;
        _this.initView();
        return _this;
    }
    NumImg.prototype.initView = function () {
        this._img = new egret.Bitmap();
        this.addChild(this._img);
    };
    NumImg.prototype.setNum = function (type, value) {
        this._num = value;
        this._img.texture = RES.getRes("num" + type + "_json.num" + type + "_" + value);
    };
    return NumImg;
}(egret.Sprite));
__reflect(NumImg.prototype, "NumImg");
//# sourceMappingURL=NumImg.js.map