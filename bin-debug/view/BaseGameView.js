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
 *
 */
var BaseGameView = (function (_super) {
    __extends(BaseGameView, _super);
    function BaseGameView() {
        var _this = _super.call(this) || this;
        // protected getOthrPlayerView(playerId:string):BasePlayerView
        // {
        // 	var len:number = this._otherPlayerViews.length;
        // 	for(var i:number = 0; i < len; i++)
        // 	{
        // 		var playerView:BasePlayerView = this._otherPlayerViews[i];
        // 		var data:Object = playerView.getData();
        // 		if(data["playerId"].toString() == playerId)
        // 			return playerView;
        // 	}
        // 	return null;
        // }
        _this._data = null;
        _this._gameStatus = -1;
        _this._isShowChat = false;
        _this._playerDataHash = new HashMap();
        _this.initView();
        return _this;
    }
    BaseGameView.prototype.getView = function () {
        return this;
    };
    Object.defineProperty(BaseGameView.prototype, "isShowChat", {
        set: function (value) {
            this._isShowChat = value;
        },
        enumerable: true,
        configurable: true
    });
    BaseGameView.prototype.getData = function () {
        return this._data;
    };
    BaseGameView.prototype.initView = function () {
        this.touchEnabled = true;
    };
    BaseGameView.prototype.dispose = function () {
    };
    BaseGameView.prototype.getPlayerInfoById = function (id) {
        return this._playerDataHash.get(id);
    };
    BaseGameView.prototype.init = function (battleData) {
    };
    return BaseGameView;
}(egret.Sprite));
__reflect(BaseGameView.prototype, "BaseGameView", ["IGame"]);
//# sourceMappingURL=BaseGameView.js.map