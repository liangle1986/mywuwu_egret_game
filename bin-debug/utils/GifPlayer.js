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
var GifPlayer = (function (_super) {
    __extends(GifPlayer, _super);
    function GifPlayer() {
        var _this = _super.call(this) || this;
        _this._frameIndex = 1;
        _this._lastTime = 0;
        _this._fpsTimer = 1000 / 24;
        _this._intervalId = -1;
        _this._frameTotal = 15;
        _this._prefix = "";
        _this._playCount = -1;
        _this.initView();
        return _this;
    }
    GifPlayer.prototype.setFrameTotal = function (value) {
        this._frameTotal = value;
    };
    GifPlayer.prototype.setFramePrefix = function (str) {
        this._prefix = str;
    };
    GifPlayer.prototype.play = function (count) {
        if (count === void 0) { count = -1; }
        this._playCount = count;
        this.stop();
        this._frameIndex = 0;
        this.onInterval();
        egret.clearInterval(this._intervalId);
        this._intervalId = egret.setInterval(this.onInterval, this, this._fpsTimer);
    };
    GifPlayer.prototype.stop = function () {
        egret.clearInterval(this._intervalId);
    };
    GifPlayer.prototype.initView = function () {
        this._img = new egret.Bitmap();
        this._img.texture = RES.getRes(this._prefix + "1_png");
        this.addChild(this._img);
    };
    GifPlayer.prototype.onInterval = function () {
        this._frameIndex++;
        if (this._frameIndex > this._frameTotal) {
            this._frameIndex = 1;
            if (this._playCount == 1) {
                if (this.parent != null)
                    this.parent.removeChild(this);
                egret.clearInterval(this._intervalId);
            }
        }
        if (this._frameIndex < 10)
            this._img.texture = RES.getRes(this._prefix + this._frameIndex + "_png");
        else
            this._img.texture = RES.getRes(this._prefix + this._frameIndex + "_png");
    };
    return GifPlayer;
}(egret.Sprite));
__reflect(GifPlayer.prototype, "GifPlayer");
//# sourceMappingURL=GifPlayer.js.map