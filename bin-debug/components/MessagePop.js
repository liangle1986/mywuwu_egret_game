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
 * 弹出消息 漂浮消息显示
 */
var MessagePop = (function (_super) {
    __extends(MessagePop, _super);
    function MessagePop() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    MessagePop.show = function (content) {
        var messageItem;
        if (MessagePop.pool.length > 0)
            messageItem = MessagePop.pool.pop();
        else {
            messageItem = new MessagePop();
        }
        if (messageItem) {
            messageItem.show(content);
            GameGlobal.topLayer.addChild(messageItem);
        }
    };
    MessagePop.prototype.show = function (content) {
        this.y = (GameGlobal.stage.stageHeight - this.height) >> 1;
        this.alpha = 1;
        egret.Tween.get(this).wait(1000).to({ y: this.y - 100, alpha: 0 }, 1000, egret.Ease.quadIn).call(this.tweenEnd, this);
    };
    MessagePop.prototype.tweenEnd = function () {
        if (this.parent) {
            this.parent.removeChild(this);
            MessagePop.pool.push(this);
        }
    };
    MessagePop.prototype.initView = function () {
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes("messageBg_png");
        this.addChild(this._bg);
        this._contentTF = new egret.TextField();
        this._contentTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._contentTF.textColor = 0x000000;
        this._contentTF.size = 30;
        this._contentTF.text = "message...";
        this.addChild(this._contentTF);
    };
    MessagePop.pool = []; //对象池
    return MessagePop;
}(DComponent));
__reflect(MessagePop.prototype, "MessagePop");
//# sourceMappingURL=MessagePop.js.map