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
 * 游戏设置
 */
var SettingView = (function (_super) {
    __extends(SettingView, _super);
    function SettingView() {
        var _this = _super.call(this) || this;
        _this._isMusicOn = true;
        _this._isSoundOn = true;
        _this.skinName = "SettingSkin";
        _this.name = "SettingView";
        return _this;
    }
    SettingView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
    };
    SettingView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        switch (clickTarget) {
            case this.musicToggle:
                this._isMusicOn = !this._isMusicOn;
                this.musicToggle.texture = this._isMusicOn ? RES.getRes("teahouse_json.t_toggleOn2") : RES.getRes("teahouse_json.t_toggleOff2");
                SoundManager.instance.isMusicOn = this._isMusicOn;
                break;
            case this.soundToggle:
                this._isSoundOn = !this._isSoundOn;
                this.soundToggle.texture = this._isSoundOn ? RES.getRes("teahouse_json.t_toggleOn2") : RES.getRes("teahouse_json.t_toggleOff2");
                SoundManager.instance.isSoundOn = this._isSoundOn;
                break;
        }
    };
    SettingView.prototype.childrenCreated = function () {
    };
    SettingView.prototype.show = function () {
        this.bindButton(this.musicToggle);
        this.bindButton(this.soundToggle);
    };
    return SettingView;
}(IFrameBase));
__reflect(SettingView.prototype, "SettingView");
//# sourceMappingURL=SettingView.js.map