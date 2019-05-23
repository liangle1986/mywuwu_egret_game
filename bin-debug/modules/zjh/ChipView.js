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
var ChipView = (function (_super) {
    __extends(ChipView, _super);
    function ChipView() {
        var _this = _super.call(this) || this;
        _this._chipImg = new egret.Bitmap();
        _this._chipImg.texture = RES.getRes("game_json.chip1");
        _this.addChild(_this._chipImg);
        _this._chipImg.anchorOffsetX = _this._chipImg.width * 0.5;
        _this._chipImg.anchorOffsetY = _this._chipImg.height * 0.5;
        _this._chipImg.x = _this._chipImg.width * 0.5;
        _this._chipImg.y = _this._chipImg.height * 0.5;
        return _this;
    }
    ChipView.prototype.setValue = function (value) {
        this._chipImg.texture = RES.getRes("game_json.chip" + value);
    };
    return ChipView;
}(egret.Sprite));
__reflect(ChipView.prototype, "ChipView");
//# sourceMappingURL=ChipView.js.map