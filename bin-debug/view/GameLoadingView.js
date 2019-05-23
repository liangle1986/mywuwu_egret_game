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
 * 游戏加载视图
 */
var GameLoadingView = (function (_super) {
    __extends(GameLoadingView, _super);
    function GameLoadingView() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    GameLoadingView.getInstance = function () {
        if (GameLoadingView._instance == null)
            GameLoadingView._instance = new GameLoadingView();
        return GameLoadingView._instance;
    };
    GameLoadingView.prototype.show = function () {
        GameGlobal.stage.addChild(this);
    };
    GameLoadingView.prototype.hide = function () {
        if (GameGlobal.stage.contains(this))
            GameGlobal.stage.removeChild(this);
    };
    // 游戏进度
    GameLoadingView.prototype.initView = function () {
        this.touchEnabled = true;
        // 绘制规矩
        var bgShape = new egret.Shape();
        bgShape.graphics.beginFill(0);
        bgShape.graphics.drawRect(0, 0, GameGlobal.stageW, GameGlobal.stageH);
        bgShape.graphics.endFill();
        this.addChild(bgShape);
        // 进度
        this._progressBar = new DProgressBar();
        this._progressBar.setValue(0);
        this.addChild(this._progressBar);
        this._progressBar.y = ((GameGlobal.stage.stageHeight - this._progressBar.height) >> 1) + 50;
        this._progressBar.x = (GameGlobal.stage.stageWidth - this._progressBar.width) >> 1;
        // 提示字体
        this._loadingText = new egret.TextField();
        this._loadingText.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._loadingText.size = 28;
        this._loadingText.textAlign = egret.HorizontalAlign.CENTER;
        this._loadingText.width = this._progressBar.width;
        this._loadingText.text = "拼命加载中，请稍后...";
        this.addChild(this._loadingText);
        this._loadingText.textColor = 0xffffff;
        this._loadingText.x = this._progressBar.x;
        this._loadingText.y = this._progressBar.y - 50;
    };
    GameLoadingView.prototype.setProgress = function (current, total) {
        this._progressBar.setValue(current, total);
    };
    return GameLoadingView;
}(egret.Sprite));
__reflect(GameLoadingView.prototype, "GameLoadingView");
//# sourceMappingURL=GameLoadingView.js.map