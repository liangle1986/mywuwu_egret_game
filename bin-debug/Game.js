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
 * 游戏大厅
 */
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super.call(this) || this;
    }
    //初始化游戏大厅
    Game.prototype.init = function () {
        //layer
        GameGlobal.mapLayer = new MapLayer();
        this.addChild(GameGlobal.mapLayer);
        //地图UI层，顶部条等
        GameGlobal.mapUILayer = new MapUILayer();
        this.addChild(GameGlobal.mapUILayer);
        //弹窗层
        GameGlobal.iframeLayer = new IFrameLayer();
        this.addChild(GameGlobal.iframeLayer);
        //游戏最高层（仅次于鼠标指针、Tips之下）
        GameGlobal.topLayer = new TopLayer();
        this.addChild(GameGlobal.topLayer);
        //新手引导层
        GameGlobal.newbeeGuideLayer = new NewbeeGuideLayer();
        this.addChild(GameGlobal.newbeeGuideLayer);
        MyUserInfo.getInstance();
        GameGlobal.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
    };
    // 重置舞台大小
    Game.prototype.onResize = function (evt) {
        GameGlobal.mapUILayer.resize();
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map