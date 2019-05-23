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
 * 自定义事件
 */
var DEvent = (function (_super) {
    __extends(DEvent, _super);
    function DEvent(type, data, bubbles, cancelable) {
        if (data === void 0) { data = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.data = data;
        return _this;
    }
    DEvent.ACTION_CHANGE = "action_change";
    /** 选择牌 */
    DEvent.CARD_ACTION_CHANGE = "card_action_change";
    /** 玩家操作牌组更新 */
    DEvent.USER_SELECT_CARDS_UPDATE = "user_select_cards_update";
    /** 下注操作 */
    DEvent.BET_ACTION = "betAction";
    return DEvent;
}(egret.Event));
__reflect(DEvent.prototype, "DEvent");
//# sourceMappingURL=DEvent.js.map