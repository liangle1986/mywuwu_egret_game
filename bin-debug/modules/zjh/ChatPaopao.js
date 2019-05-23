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
 * 聊天泡泡框
 */
var ChatPaopao = (function (_super) {
    __extends(ChatPaopao, _super);
    /**
     * 0 左边玩家 1右边玩家
     */
    function ChatPaopao(direction) {
        if (direction === void 0) { direction = 0; }
        var _this = _super.call(this) || this;
        _this._direction = 0;
        _this._direction = direction;
        _this.initView();
        return _this;
    }
    ChatPaopao.prototype.show = function (msg, type) {
        if (type === void 0) { type = 1; }
        this._contentTF.text = msg;
        if (type == 3) {
            var chatIndex = NN_ChatView.WORDS2.indexOf(msg);
            if (MyUserInfo.getInstance().gender == 0)
                SoundManager.instance.playSound("word1-" + chatIndex + "_mp3");
            else
                SoundManager.instance.playSound("word1-" + chatIndex + "2_mp3");
        }
    };
    ChatPaopao.prototype.initView = function () {
        this._bg = new egret.Bitmap();
        this.addChild(this._bg);
        this._contentTF = new egret.TextField();
        this._contentTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._contentTF.size = 18;
        this._contentTF.textColor = 0xffffff;
        this._contentTF.textAlign = egret.HorizontalAlign.LEFT;
        this._contentTF.multiline = true;
        this._contentTF.wordWrap = true;
        this._contentTF.width = 184;
        this._contentTF.height = 60;
        // this._contentTF.border = true;
        this._contentTF.text = "";
        this._contentTF.x = 5;
        this._contentTF.y = 0;
        this.addChild(this._contentTF);
        if (this._direction == 0) {
            this._bg.texture = RES.getRes("common_json.chatpaopao");
            this._contentTF.x = 15;
            this._contentTF.y = 10;
        }
        else {
            this._bg.texture = RES.getRes("common_json.chatpaopao");
            this._contentTF.x = 15;
            this._contentTF.y = 10;
        }
    };
    return ChatPaopao;
}(egret.Sprite));
__reflect(ChatPaopao.prototype, "ChatPaopao");
//# sourceMappingURL=ChatPaopao.js.map