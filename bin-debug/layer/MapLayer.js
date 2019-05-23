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
 * 地图层
 */
var MapLayer = (function (_super) {
    __extends(MapLayer, _super);
    function MapLayer() {
        var _this = _super.call(this) || this;
        _this.nnBattleView = null;
        //地图背景
        GameGlobal.mapBGLayer = new MapBgLayer();
        _this.addChild(GameGlobal.mapBGLayer);
        GameEventManager.addEvent(NetAction.dissolveRoom.toString(), _this.dissolveRoomResponse, _this); //解散房间请求
        GameEventManager.addEvent(NetAction.dissolveRoomSuccess.toString(), _this.dissolveRoomSuccessResponse, _this); //解散成功
        GameEventManager.addEvent(GameEventManager.QUIT_ROOM, _this.onQuitGame, _this); //退出房间
        return _this;
    }
    // 退出房间
    MapLayer.prototype.onQuitGame = function (evt) {
        this.hideBattle();
        GameGlobal.mapUILayer.visible = true;
        SoundManager.instance.playMusic("hall_mp3");
    };
    /**
     * 解散房间请求
     */
    MapLayer.prototype.dissolveRoomResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        // 如果不是直接，监听是否同意解散
        if (playerId != MyUserInfo.getInstance().userId) {
            // 根据用户id 获取舞台类型
            var playerData = this.getBattle().getPlayerInfoById(playerId);
            var nickName = playerData["nickName"];
            AlertView.getInstance().setConfirmCallBack(this.agreeDissolveRoom, this);
            AlertView.getInstance().setCancelCallBack(this.disagreeDissolveRoom, this);
            AlertView.getInstance().show("玩家" + nickName + "请求解散房间，是否同意？", AlertView.CONFIRM_MODE);
        }
    };
    // 同意解散完成监听处理
    MapLayer.prototype.agreeDissolveRoom = function () {
        var data = {};
        data["msgType"] = NetAction.agreeDissolveRoom;
        data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId };
        SocketCommand.getInstance().send(data);
    };
    // 不同意解散，后续处理
    MapLayer.prototype.disagreeDissolveRoom = function () {
        var data = {};
        data["msgType"] = NetAction.disagreeDissolveRoom;
        data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId };
        SocketCommand.getInstance().send(data);
    };
    // 解散成功音乐播放
    MapLayer.prototype.dissolveRoomSuccessResponse = function (evt) {
        var result = evt.data;
        // 隐藏房间信息
        this.hideBattle();
        GameGlobal.mapUILayer.visible = true;
        SoundManager.instance.playMusic("hall_mp3");
    };
    MapLayer.prototype.hideBattle = function () {
        // 移除对应舞台
        if (this._gameView && this._gameView.stage) {
            this._gameView.dispose();
            this.removeChild(this._gameView.getView());
            this._gameView = null;
        }
        if (this.nnBattleView && this.nnBattleView.stage) {
            this.nnBattleView.dispose();
            this.removeChild(this.nnBattleView);
        }
        // 关闭所以界面呢
        GameGlobal.iframeLayer.hideIFrame2(GameResult);
        GameGlobal.iframeLayer.hideIFrame2(JieSuanView);
        GameGlobal.iframeLayer.hideIFrame2(NNGameResult);
        if (BiPaiView.isShow) {
            BiPaiView.getInstance().hide();
        }
    };
    // 获取对应游戏舞台信息
    MapLayer.prototype.getBattle = function () {
        if (this._gameView && this._gameView.stage)
            return this._gameView;
        else if (this.nnBattleView && this.nnBattleView.stage)
            return this.nnBattleView;
        return null;
    };
    // 展示对应舞台信息
    MapLayer.prototype.showBattle = function (battleData) {
        if (battleData === void 0) { battleData = null; }
        // 先移除，在展示
        this.hideBattle();
        if (GameGlobal.gameType == 3) {
            this._gameView = new ZjhBattleView();
            this.addChild(this._gameView.getView());
            this._gameView.init(battleData);
        }
        else if (GameGlobal.gameType == 1) {
            if (this.nnBattleView == null)
                this.nnBattleView = new NNBattleView();
            this.addChild(this.nnBattleView);
            this.nnBattleView.init(battleData);
        }
    };
    return MapLayer;
}(eui.Component));
__reflect(MapLayer.prototype, "MapLayer");
//# sourceMappingURL=MapLayer.js.map