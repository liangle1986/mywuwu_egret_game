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
 *  比牌舞台
 */
var BiPaiView = (function (_super) {
    __extends(BiPaiView, _super);
    function BiPaiView() {
        var _this = _super.call(this) || this;
        _this._timeoutId = -1;
        _this.initView();
        return _this;
    }
    BiPaiView.getInstance = function () {
        if (BiPaiView._instance == null)
            BiPaiView._instance = new BiPaiView();
        return BiPaiView._instance;
    };
    BiPaiView.prototype.show = function (data) {
        var _this = this;
        this._data = data;
        // 把比牌动画添加到舞台
        BiPaiView.isShow = true;
        GameGlobal.stage.addChild(this);
        // 设置比牌玩家的基本信息
        var myData = { "nickName": MyUserInfo.getInstance().userName, "headImgUrl": MyUserInfo.getInstance().faceUrl };
        this._leftPlayerView.setPlayerInfo(myData);
        // 失败方标识
        var loserId = data["loserId"];
        // 获胜方标识
        var winId = data["winnerId"];
        // 获取对方游戏舞台
        var otherPlayerData = {};
        if (this._data["winnerId"] == MyUserInfo.getInstance().userId) {
            otherPlayerData = GameGlobal.mapLayer.getBattle().getPlayerInfoById(loserId);
        }
        else {
            otherPlayerData = GameGlobal.mapLayer.getBattle().getPlayerInfoById(winId);
        }
        this._rightPlayerView.setPlayerInfo(otherPlayerData);
        // 播放VS音乐
        SoundManager.instance.playSound("vs3_mp3");
        // 设置延时事件
        egret.clearTimeout(this._timeoutId);
        this._timeoutId = egret.setTimeout(this.timeoutHandle, this, 3000);
        // vs 动画效果
        this._vsImg.y = -100;
        egret.Tween.get(this._vsImg).to({ y: 49 }, 100, egret.Ease.backIn).call(function () {
            // 炸弹图
            if (_this._zhadanMc == null)
                _this._zhadanMc = DUtils.createMovieClipByName("zhadan");
            _this._zhadanMc.frameRate = 12;
            // 移动到指定位置
            _this._zhadanMc.gotoAndStop(1);
            SoundManager.instance.playSound("bomb_mp3");
            // 赢放位置
            if (_this._data["winnerId"] == MyUserInfo.getInstance().userId) {
                _this._zhadanMc.x = 215;
                _this._zhadanMc.y = -64;
            }
            else {
                _this._zhadanMc.x = 675;
                _this._zhadanMc.y = -64;
            }
            _this.addChild(_this._zhadanMc);
            MovieClipUtils.playOnce(_this._zhadanMc, function () {
                // 添加监听发送数据
                GameEventManager.dispatchEvent("compareComplete", _this._data);
            });
        }, this);
    };
    // 延时移除
    BiPaiView.prototype.timeoutHandle = function () {
        egret.clearTimeout(this._timeoutId);
        this.hide();
    };
    // 移除舞台
    BiPaiView.prototype.hide = function () {
        BiPaiView.isShow = false;
        if (GameGlobal.stage.contains(this))
            GameGlobal.stage.removeChild(this);
    };
    // 初始化比牌舞台信息
    BiPaiView.prototype.initView = function () {
        // 背景
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes("bipaiBg_png");
        this.addChild(this._bg);
        // 左玩家信息
        this._leftPlayerView = new PlayerBaseInfoView();
        this.addChild(this._leftPlayerView);
        this._leftPlayerView.x = 55;
        this._leftPlayerView.y = 20;
        // 右侧牌数组
        this._rightCardGoup = new CardGroup();
        this._rightCardGoup.x = 676;
        this._rightCardGoup.y = 40;
        this.addChild(this._rightCardGoup);
        // 左侧牌数组
        this._leftCardGoup = new CardGroup();
        this._leftCardGoup.x = 216;
        this._leftCardGoup.y = 40;
        this.addChild(this._leftCardGoup);
        // 右侧玩家信息
        this._rightPlayerView = new PlayerBaseInfoView();
        this.addChild(this._rightPlayerView);
        this._rightPlayerView.x = 966;
        this._rightPlayerView.y = 20;
        // this._vsMc = DUtils.createMovieClipByName("vs");
        // this._vsMc.frameRate = 24;
        // this._vsMc.gotoAndPlay(1, -1);
        // this.addChild(this._vsMc);
        // this._vsMc.x = 472; this._vsMc.y = 19;
        // VS图片
        this._vsImg = new egret.Bitmap();
        this._vsImg.texture = RES.getRes("game_json.vs");
        this.addChild(this._vsImg);
        this._vsImg.x = 485;
        this._vsImg.y = 49;
        this.touchEnabled = true;
        this.y = 168;
    };
    // 是否显示比牌舞台
    BiPaiView.isShow = false;
    return BiPaiView;
}(egret.Sprite));
__reflect(BiPaiView.prototype, "BiPaiView");
//# sourceMappingURL=BiPaiView.js.map