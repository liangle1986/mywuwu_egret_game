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
 * 进度条信息
 */
var DProgressBar = (function (_super) {
    __extends(DProgressBar, _super);
    function DProgressBar() {
        var _this = _super.call(this) || this;
        // 设置最大值
        _this._maxValue = 100;
        // 设置每次绘制规矩大小和最大值
        _this._value = 0;
        _this.initView();
        return _this;
    }
    DProgressBar.prototype.initView = function () {
        // 背景图片
        this._background = new egret.Bitmap();
        this._background.texture = RES.getRes("loadingbar_png");
        this.addChild(this._background);
        // 动画切换图片
        this._foreground = new egret.Bitmap();
        this._foreground.texture = RES.getRes("loadingbar2_png");
        this.addChild(this._foreground);
        // 动态规矩
        this._maskImg = new egret.Shape();
        this._maskImg.graphics.beginFill(0, 1);
        this._maskImg.graphics.drawRect(0, 0, this._foreground.width, 40);
        this._maskImg.graphics.endFill();
        this.addChild(this._maskImg);
        this._maskImg.x = 7;
        this._maskImg.y = 5;
        // 设置和背景滚动条居中 这里需要调试
        this._foreground.x = 7;
        this._foreground.y = 5;
        // 利用创建规矩把图片绘制出来的效果，形成滚动条效果
        this._foreground.mask = this._maskImg;
    };
    DProgressBar.prototype.setMaxValue = function (value) {
        this._maxValue = value;
    };
    DProgressBar.prototype.setValue = function (value, maxValue) {
        if (maxValue === void 0) { maxValue = 100; }
        this._value = value;
        this._maxValue = maxValue;
        var percent = this._value / this._maxValue;
        this._maskImg.scaleX = percent;
    };
    return DProgressBar;
}(DComponent));
__reflect(DProgressBar.prototype, "DProgressBar");
//# sourceMappingURL=DProgressBar.js.map