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
 * 个人详细信息
 */
var SelfDetailInfoView = (function (_super) {
    __extends(SelfDetailInfoView, _super);
    function SelfDetailInfoView() {
        var _this = _super.call(this) || this;
        _this.skinName = "PlayerDetailInfoSkin";
        _this.name = "SelfDetailInfoView";
        return _this;
    }
    SelfDetailInfoView.prototype.childrenCreated = function () {
        this._face = new DImage(124, 124);
        this["mainView"].addChild(this._face);
        this._face.defaultImg = "hall_json.testface2";
        this._face.x = 120;
        this._face.y = 91;
        this.nickNameTF.text = "昵称：" + MyUserInfo.getInstance().getFormatUserName(14);
        this.idTF.text = "ID：" + MyUserInfo.getInstance().userId;
        this.ipTF.text = "IP：" + MyUserInfo.getInstance().ip;
        this._face.load(MyUserInfo.getInstance().faceUrl);
    };
    /*该模块被创建完成后的回调函数*/
    SelfDetailInfoView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
    };
    SelfDetailInfoView.prototype.show = function () {
    };
    return SelfDetailInfoView;
}(IFrameBase));
__reflect(SelfDetailInfoView.prototype, "SelfDetailInfoView");
//# sourceMappingURL=SelfDetailInfoView.js.map