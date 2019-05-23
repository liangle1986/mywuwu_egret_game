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
 * 游戏中玩家单元
 */
var BasePlayerView = (function (_super) {
    __extends(BasePlayerView, _super);
    function BasePlayerView() {
        var _this = _super.call(this) || this;
        _this._position = 0; //位置信息，标注左右玩家位置
        _this._isSelf = false;
        _this._status = 1;
        _this._isZhuang = false;
        _this._isFang = false;
        _this.initView();
        return _this;
    }
    BasePlayerView.prototype.getStatus = function () {
        return this._status;
    };
    BasePlayerView.prototype.setOffline = function (value) {
        this._offlineFlagIcon.visible = value;
    };
    BasePlayerView.prototype.isOffline = function () {
        return this._offlineFlagIcon.visible;
    };
    BasePlayerView.prototype.setPosition = function (value) {
        this._position = value;
    };
    Object.defineProperty(BasePlayerView.prototype, "isZhuang", {
        get: function () {
            return this._isZhuang;
        },
        set: function (value) {
            this._isZhuang = value;
            this._zhuangFlag.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePlayerView.prototype, "isFang", {
        set: function (value) {
            this._isFang = value;
            this._zhuangFlag.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    BasePlayerView.prototype.setData = function (playerInfo) {
        this._data = playerInfo;
        this._nickNameTF.text = playerInfo["nickName"];
        if (this._idTF)
            this._idTF.text = playerInfo["playerId"];
        this._faceImg.load(this._data["headImgUrl"]);
    };
    BasePlayerView.prototype.getData = function () {
        return this._data;
    };
    BasePlayerView.prototype.dispose = function () {
    };
    BasePlayerView.prototype.getChipBornPos = function () {
        return [this.x + this._faceImg.x + this._faceImg.width * 0.5, this.y + this._faceImg.y + this._faceImg.height * 0.5];
    };
    /**
     * 显示/不显示录制
     */
    BasePlayerView.prototype.showRecord = function (value) {
        this._recordIcon.visible = value;
    };
    BasePlayerView.prototype.initView = function () {
    };
    //位置定义
    BasePlayerView.TOP_LEFT = -2;
    BasePlayerView.TOP_RIGHT = 2;
    BasePlayerView.LEFT = -1;
    BasePlayerView.RIGHT = 1;
    BasePlayerView.DOWN = 0; //底部，自己位置
    BasePlayerView.NOT_READY = 1; //未准备
    BasePlayerView.READYED = 2; //准备
    BasePlayerView.NOT_QZ = 3; //不抢庄
    BasePlayerView.QZ = 4; //抢庄
    BasePlayerView.WATCHER = 0; //观察者
    BasePlayerView.BETED = 5; //已压分
    BasePlayerView.SHOWCARDED = 6; //已亮牌
    BasePlayerView.WAIT_TO_BET = 7; //等待亮牌
    return BasePlayerView;
}(egret.Sprite));
__reflect(BasePlayerView.prototype, "BasePlayerView");
//# sourceMappingURL=BasePlayerView.js.map