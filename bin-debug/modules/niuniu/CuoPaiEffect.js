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
 * 警告框 / 确认框
 */
var CuoPaiEffect = (function (_super) {
    __extends(CuoPaiEffect, _super);
    function CuoPaiEffect() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    CuoPaiEffect.getInstance = function () {
        if (this._instance == null)
            this._instance = new CuoPaiEffect();
        return this._instance;
    };
    CuoPaiEffect.prototype.show = function () {
        GameGlobal.stage.addChild(this);
        CuoPaiEffect.isShow = true;
        var data = {};
        data["msgType"] = NetAction.cuopai;
        SocketCommand.getInstance().send(data);
    };
    CuoPaiEffect.prototype.hide = function () {
        if (this.stage)
            GameGlobal.stage.removeChild(this);
        CuoPaiEffect.isShow = false;
    };
    CuoPaiEffect.prototype.initView = function () {
        this._bg = new egret.Shape();
        this._bg.graphics.beginFill(0, 0);
        this._bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
        this._bg.graphics.endFill();
        this.addChild(this._bg);
        // this._effectMc = DUtils.createMovieClipByName("cuopaiEffect");
        // this.addChild(this._effectMc);
        // this._effectMc.play(-1);
        // this._effectMc.x = (GameGlobal.stageW - 131) >>1;
        // this._effectMc.y = (GameGlobal.stageH - 99) >>1;
        this._gifPlayer = new GifPlayer();
        this._gifPlayer.play(-1);
        this.addChild(this._gifPlayer);
        this._gifPlayer.x = (GameGlobal.stageW - 619) >> 1;
        this._gifPlayer.y = (GameGlobal.stageH - 450) >> 1;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
    };
    CuoPaiEffect.prototype.onTouchTapHandle = function (evt) {
        this.hide();
        // var data:Object = {};
        // data["msgType"] = NetAction.cuopai;
        // SocketCommand.getInstance().send(data);
    };
    CuoPaiEffect._instance = null;
    CuoPaiEffect.isShow = false;
    return CuoPaiEffect;
}(egret.Sprite));
__reflect(CuoPaiEffect.prototype, "CuoPaiEffect");
//# sourceMappingURL=CuoPaiEffect.js.map