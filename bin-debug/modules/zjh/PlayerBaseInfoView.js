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
 * 玩家基本信息界面， 头像，昵称等
 */
var PlayerBaseInfoView = (function (_super) {
    __extends(PlayerBaseInfoView, _super);
    function PlayerBaseInfoView() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    PlayerBaseInfoView.prototype.setPlayerInfo = function (data) {
        if (data == null)
            return;
        this._data = data;
        this._nickNameTF.text = data["nickName"];
        var headImgUrl = data["headImgUrl"];
        if (headImgUrl != null)
            this._faceImg.load(data["headImgUrl"]);
    };
    PlayerBaseInfoView.prototype.initView = function () {
        this._faceBg = new egret.Bitmap();
        this._faceBg.texture = RES.getRes("game_json.faceBg");
        this.addChild(this._faceBg);
        this._faceImg = new DImage(101, 96);
        this._faceImg.x = 7;
        this._faceImg.y = 28;
        this.addChild(this._faceImg);
        this._nickNameTF = new egret.TextField();
        this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._nickNameTF.size = 16;
        this._nickNameTF.textColor = 0xffffff;
        this._nickNameTF.textAlign = egret.HorizontalAlign.CENTER;
        this._nickNameTF.width = 104;
        this._nickNameTF.x = 6;
        this._nickNameTF.y = 4;
        this.addChild(this._nickNameTF);
        this._nickNameTF.text = "...";
        this._goldTF = new egret.TextField();
        this._goldTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._goldTF.size = 20;
        this._goldTF.textColor = 0xffdb56;
        this._goldTF.textAlign = egret.HorizontalAlign.CENTER;
        this._goldTF.width = 104;
        this._goldTF.x = 6;
        this._goldTF.y = 131;
        this.addChild(this._goldTF);
        this._goldTF.text = "0";
    };
    return PlayerBaseInfoView;
}(egret.Sprite));
__reflect(PlayerBaseInfoView.prototype, "PlayerBaseInfoView");
//# sourceMappingURL=PlayerBaseInfoView.js.map