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
 * 公告信息
 */
var NoticeView = (function (_super) {
    __extends(NoticeView, _super);
    function NoticeView() {
        var _this = _super.call(this) || this;
        _this._notices = [];
        _this._noticeIndex = 0;
        _this.initView();
        return _this;
    }
    // 添加公告
    NoticeView.prototype.addNotice = function (data) {
        this._notices.push(data);
        if (this._notices.length == 1) {
            this.nextNotice();
        }
        this.visible = true;
    };
    NoticeView.prototype.init = function () {
        this.visible = false;
        this._noticeIndex = 0;
        this._notices = [];
        egret.Tween.removeTweens(this._noticeTF);
        this._noticeTF.x = this._bg.width + 5;
    };
    // 公告轮播动画
    NoticeView.prototype.nextNotice = function () {
        var _this = this;
        if (this._noticeIndex >= this._notices.length)
            this._noticeIndex = 0;
        var notice = this._notices[this._noticeIndex];
        var tweenTime = 20000;
        this._noticeTF.text = notice;
        egret.Tween.removeTweens(this._noticeTF);
        egret.Tween.get(this._noticeTF).to({ x: 47 - this._noticeTF.textWidth }, tweenTime).call(function () {
            _this._noticeTF.x = _this._bg.width + 5;
            _this._noticeIndex++;
            _this.nextNotice();
        }, this);
    };
    // 初始化公告
    NoticeView.prototype.initView = function () {
        // 背景
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes("notice_bg2_png");
        this.addChild(this._bg);
        // 公告动画
        var maskShape = new egret.Shape();
        maskShape.graphics.beginFill(0);
        maskShape.graphics.drawRect(0, 0, 1096, this._bg.height);
        this.addChild(maskShape);
        maskShape.x = 50;
        // 公告信息
        this._noticeTF = new egret.TextField();
        this._noticeTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._noticeTF.textColor = 0xffffff;
        this._noticeTF.size = 21;
        this._noticeTF.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this._noticeTF);
        this._noticeTF.text = "";
        this._noticeTF.x = this._bg.width + 5;
        this._noticeTF.y = 11;
        this._noticeTF.mask = maskShape;
        this.visible = false;
        // this.addNotice("系统公告测试！！！");
    };
    return NoticeView;
}(egret.Sprite));
__reflect(NoticeView.prototype, "NoticeView");
//# sourceMappingURL=NoticeView.js.map