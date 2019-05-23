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
 * 牌的视图
 */
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        var _this = _super.call(this) || this;
        //初始化背景 位置
        _this._view = new egret.Bitmap();
        _this._view.texture = RES.getRes("poker5_json.cardBg");
        _this.addChild(_this._view);
        // 为什么要设置绝对锚点？？？
        _this._view.anchorOffsetX = _this._view.width * 0.5;
        _this._view.anchorOffsetY = _this._view.height * 0.5;
        _this._view.x = _this._view.width * 0.5;
        _this._view.y = _this._view.height * 0.5;
        _this.touchEnabled = true;
        return _this;
    }
    Object.defineProperty(CardView.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
            if (this._data == null)
                this._view.texture = RES.getRes("poker5_json.cardBg");
        },
        enumerable: true,
        configurable: true
    });
    // 发牌
    CardView.prototype.showValue = function (value, showAnimation) {
        var _this = this;
        if (showAnimation === void 0) { showAnimation = false; }
        if (this._data == null)
            return;
        egret.Tween.removeTweens(this._view);
        // 是否展示背景 false 是 true 否
        if (value) {
            // 是否动画展示 true 是 false 不是
            if (showAnimation) {
                // 牌的动作
                this._view.scaleX = -1;
                egret.Tween.get(this._view).to({ scaleX: 1 }, 500).call(function () {
                    var prefix = _this.getPokerResName(_this._data.getNum(), _this._data.getColor());
                    _this._view.texture = RES.getRes(prefix + ".card" + _this._data.getNum() + "_" + _this._data.getColor());
                }, this);
            }
            else {
                var prefix = this.getPokerResName(this._data.getNum(), this._data.getColor());
                this._view.texture = RES.getRes(prefix + ".card" + this._data.getNum() + "_" + this._data.getColor());
            }
        }
        else {
            this._view.texture = RES.getRes("poker5_json.cardBg");
        }
    };
    // 根据牌的数和颜色值获取对应图片前缀
    CardView.prototype.getPokerResName = function (num, color) {
        var prefix = "poker1_json";
        if (num <= 3)
            prefix = "poker1_json";
        else if (num <= 6) {
            prefix = "poker2_json";
        }
        else if (num <= 9) {
            prefix = "poker3_json";
        }
        else if (num <= 12) {
            prefix = "poker4_json";
        }
        else {
            prefix = "poker5_json";
        }
        return prefix;
    };
    return CardView;
}(egret.Sprite));
__reflect(CardView.prototype, "CardView");
//# sourceMappingURL=CardView.js.map