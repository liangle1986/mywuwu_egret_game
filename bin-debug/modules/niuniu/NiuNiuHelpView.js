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
var NiuNiuHelpView = (function (_super) {
    __extends(NiuNiuHelpView, _super);
    function NiuNiuHelpView() {
        var _this = _super.call(this) || this;
        _this.skinName = "NiuNiuHelpSkin";
        _this.name = "NiuNiuHelpView";
        return _this;
    }
    NiuNiuHelpView.prototype.tweenShow = function () {
        _super.prototype.tweenShow.call(this);
        if (this.uiOpenData != null) {
            var roomBankerType = this.uiOpenData["roomBankerType"];
            this.wanfaTF.text = this.getZhuangTypeStr(roomBankerType);
            var payType = this.uiOpenData["payType"];
            var difen = this.uiOpenData["buttomScoreType"];
            this.difenTF.text = "1/2/3/4分";
            if (difen == 1) {
                this.difenTF.text = "1/2/3/4分";
            }
            else if (difen == 2) {
                this.difenTF.text = "2/4/6/8分";
            }
            else if (difen == 3) {
                this.difenTF.text = "3/9/9/12分";
            }
            this.fanbeiTF.text = "牛牛X4牛九X3牛八X2牛七X2";
            if (payType == 2) {
                if (this.uiOpenData["totalGames"] == 10)
                    this.fangjianTF.text = "AA支付（房卡*1）";
                else
                    this.fangjianTF.text = "AA支付（房卡*2）";
            }
            else {
                if (this.uiOpenData["totalGames"] == 10)
                    this.fangjianTF.text = "房主支付（房卡*4）";
                else
                    this.fangjianTF.text = "房主支付（房卡*7）";
            }
            this.teshuTF.text = "五花牛x5五小牛X6炸弹牛X7";
        }
    };
    NiuNiuHelpView.prototype.getZhuangTypeStr = function (type) {
        var typeStr = "轮流坐庄";
        switch (type) {
            case 1:
                break;
            case 2:
                typeStr = "霸王庄";
                break;
            case 3:
                typeStr = "看牌抢庄";
                break;
            case 4:
                typeStr = "赢家当庄";
                break;
        }
        return typeStr;
    };
    return NiuNiuHelpView;
}(IFrameBase));
__reflect(NiuNiuHelpView.prototype, "NiuNiuHelpView");
//# sourceMappingURL=NiuNiuHelpView.js.map