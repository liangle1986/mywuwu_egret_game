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
var DImage = (function (_super) {
    __extends(DImage, _super);
    function DImage(width, height, defaultImgRes) {
        if (width === void 0) { width = -1; }
        if (height === void 0) { height = -1; }
        if (defaultImgRes === void 0) { defaultImgRes = "hall_json.testface"; }
        var _this = _super.call(this) || this;
        _this._width = -1;
        _this._height = -1;
        _this._defaultImgRes = "";
        _this._width = width;
        _this._height = height;
        _this._defaultImgRes = defaultImgRes;
        _this._img = new egret.Bitmap();
        _this._img.texture = RES.getRes(defaultImgRes);
        _this.addChild(_this._img);
        _this._maskImg = new egret.Bitmap();
        _this._maskImg.texture = RES.getRes(defaultImgRes);
        _this.addChild(_this._maskImg);
        _this._img.mask = _this._maskImg;
        if (width != -1 && (height != -1)) {
            _this._img.width = width;
            _this._img.height = height;
        }
        return _this;
    }
    Object.defineProperty(DImage.prototype, "defaultImg", {
        set: function (imgRes) {
            this._defaultImgRes = imgRes;
            this._img.texture = RES.getRes(imgRes);
            this._maskImg.texture = RES.getRes(imgRes);
        },
        enumerable: true,
        configurable: true
    });
    DImage.prototype.clear = function () {
        this.defaultImg = this._defaultImgRes;
    };
    DImage.prototype.getWidth = function () {
        return this._width;
    };
    DImage.prototype.getHeight = function () {
        return this._height;
    };
    DImage.prototype.setWidth = function (value) {
        this._width = value;
        if (value != -1) {
            this._img.width = value;
        }
    };
    DImage.prototype.setHeight = function (value) {
        this._height = value;
        if (value != -1) {
            this._img.height = value;
        }
    };
    DImage.prototype.load = function (url) {
        this._url = url == null ? "" : url;
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, this.imageComplete, this);
        imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFaceError, this);
        imageLoader.load(this._url);
    };
    DImage.prototype.onLoadFaceError = function (evt) {
        console.log("load face ioerror");
    };
    DImage.prototype.imageComplete = function (evt) {
        console.log("load face complete");
        this._img.texture = evt.target.data;
        this._img.width = this._width;
        this._img.height = this._height;
    };
    return DImage;
}(egret.Sprite));
__reflect(DImage.prototype, "DImage");
//# sourceMappingURL=DImage.js.map