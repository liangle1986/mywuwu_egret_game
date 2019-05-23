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
 * 倒计时
 */
var CountDownView = (function (_super) {
    __extends(CountDownView, _super);
    function CountDownView() {
        var _this = _super.call(this) || this;
        _this._leftTime = 10;
        _this.initView();
        return _this;
    }
    CountDownView.prototype.start = function (value) {
        if (value === void 0) { value = 10; }
        this._leftTime = value;
        this._tf.text = this._leftTime.toString();
        this._timer.stop();
        this._timer.reset();
        this._timer.start();
        this.visible = true;
    };
    CountDownView.prototype.stop = function () {
        this._timer.stop();
        this._timer.reset();
        this._timer.start();
        this.visible = false;
    };
    CountDownView.prototype.initView = function () {
        this._icon = new egret.Bitmap();
        this._icon.texture = RES.getRes("game_json.bull_clock");
        this.addChild(this._icon);
        this._tf = new egret.TextField();
        this._tf.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._tf.size = 28;
        this._tf.textColor = 0xffffff;
        this._tf.textAlign = egret.HorizontalAlign.CENTER;
        this._tf.width = this._icon.width;
        this.addChild(this._tf);
        this._tf.x = 3;
        this._tf.y = 16;
        this._tf.text = "0";
        this.visible = false;
        this._timer = new egret.Timer(1000);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandle, this);
    };
    CountDownView.prototype.onTimerHandle = function (ev) {
        this._leftTime--;
        this._tf.text = this._leftTime.toString();
        if (this._leftTime <= 0) {
            this.stop();
        }
    };
    return CountDownView;
}(egret.Sprite));
__reflect(CountDownView.prototype, "CountDownView");
//# sourceMappingURL=CountDownView.js.map