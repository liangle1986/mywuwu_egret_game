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
var GameEventManager = (function (_super) {
    __extends(GameEventManager, _super);
    function GameEventManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameEventManager.getInstance = function () {
        return this._instance || (this._instance = new GameEventManager());
    };
    GameEventManager.addEvent = function (evtName, listener, thisObj) {
        GameEventManager.getInstance().addEventListener(evtName, listener, thisObj);
    };
    GameEventManager.removeEvent = function (evtName, listener, thisObj) {
        GameEventManager.getInstance().removeEventListener(evtName, listener, thisObj);
    };
    GameEventManager.dispatchEvent = function (evtName, data) {
        if (data === void 0) { data = null; }
        GameEventManager.getInstance().dispatchEvent(new DEvent(evtName, data));
    };
    GameEventManager._instance = null;
    //events define here
    GameEventManager.COMPLETE = "complete";
    GameEventManager.SELECTED = "selected"; // 复选框选中
    GameEventManager.CONTINUE_GAME = "continue_game"; //结算后，继续下一局
    GameEventManager.START_BATTLE = "start_battle"; //开始战斗
    GameEventManager.END_BATTLE = "end_battle"; //结束战斗
    GameEventManager.UPDATE_RANK = "update_rank"; //更新排行榜
    GameEventManager.UPDATE_USER_GOLD = "update_user_gold"; //更新金币
    GameEventManager.UPDATE_USER_DIAMOND = "update_user_diamond"; //更新钻石
    GameEventManager.UPDATE_USER_LEVEL = "update_user_level"; //更新等级
    GameEventManager.SOCKET_CONNECTED = "socket_connected"; //链接后台
    GameEventManager.LOGIN_SUCCESS = "login_success"; // 登录页面
    GameEventManager.NEXT_ROUND = "next_round"; //下一局
    GameEventManager.QUIT_ROOM = "quit_room"; //退出房间
    GameEventManager.SHOW_LAST_POKER = "show_last_poker"; //看牌
    return GameEventManager;
}(egret.EventDispatcher));
__reflect(GameEventManager.prototype, "GameEventManager");
//# sourceMappingURL=GameEventManager.js.map