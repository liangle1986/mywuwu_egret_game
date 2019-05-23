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
 * 加载数据图标
 */
var DataLoading = (function (_super) {
    __extends(DataLoading, _super);
    function DataLoading() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    DataLoading.getInstance = function () {
        if (this._instance == null)
            this._instance = new DataLoading();
        return this._instance;
    };
    DataLoading.prototype.show = function () {
        GameGlobal.stage.addChild(this);
    };
    DataLoading.prototype.hide = function () {
        if (this.stage)
            GameGlobal.stage.removeChild(this);
    };
    DataLoading.prototype.initView = function () {
        this._bg = new egret.Shape();
        this._bg.graphics.beginFill(0, 0.1);
        this._bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
        this._bg.graphics.endFill();
        this.addChild(this._bg);
        this.touchEnabled = true;
        this._icon2 = new egret.Bitmap();
        this._icon2.texture = RES.getRes("hall_json.dataLoading");
        this.addChild(this._icon2);
        this._icon2.anchorOffsetX = this._icon2.width * 0.5;
        this._icon2.anchorOffsetY = this._icon2.height * 0.5;
        this._icon2.x = GameGlobal.stage.stageWidth * 0.5;
        this._icon2.y = GameGlobal.stage.stageHeight * 0.5;
        egret.Tween.get(this._icon2, { loop: true }).to({ rotation: 360 }, 800);
    };
    DataLoading._instance = null;
    return DataLoading;
}(egret.Sprite));
__reflect(DataLoading.prototype, "DataLoading");
//# sourceMappingURL=DataLoading.js.map