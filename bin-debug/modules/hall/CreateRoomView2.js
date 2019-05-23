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
 *
 */
var CreateRoomView2 = (function (_super) {
    __extends(CreateRoomView2, _super);
    function CreateRoomView2() {
        var _this = _super.call(this) || this;
        _this._payWay = 2; //2 = AA 1= 房主
        _this._round = 8;
        _this._zuozhuang = 1;
        _this._beishu = 1;
        _this.difen = 1;
        _this._tabIndex = -1;
        _this.skinName = "CreateRoomSkin";
        return _this;
    }
    CreateRoomView2.prototype.childrenCreated = function () {
        this.eightRoundChk.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.sixteenRoundChk.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.payWay1.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.payWay2.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.tenRoundChk.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.tweentyRoundChk.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.zuozhuang1.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.zuozhuang2.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.zuozhuang3.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.zuozhuang4.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.beishu1.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.beishu2.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.beishu3.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.difen1.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.difen2.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.difen3.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.pay1.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
        this.pay2.addEventListener(egret.Event.CHANGE, this.CheckBoxChange, this);
    };
    CreateRoomView2.prototype.CheckBoxChange = function (evt) {
        if (evt.currentTarget == this.eightRoundChk) {
            this.eightRoundChk.selected = true;
            this.sixteenRoundChk.selected = false;
            this._round = 8;
        }
        else if (evt.currentTarget == this.sixteenRoundChk) {
            this.sixteenRoundChk.selected = true;
            this.eightRoundChk.selected = false;
            this._round = 16;
        }
        else if (evt.currentTarget == this.tenRoundChk) {
            this.tenRoundChk.selected = true;
            this.tweentyRoundChk.selected = false;
            this._round = 10;
        }
        else if (evt.currentTarget == this.tweentyRoundChk) {
            this.tweentyRoundChk.selected = true;
            this.tenRoundChk.selected = false;
            this._round = 20;
        }
        else if (evt.currentTarget == this.zuozhuang1) {
            this.zuozhuang1.selected = true;
            this.zuozhuang2.selected = false;
            this.zuozhuang3.selected = false;
            this.zuozhuang4.selected = false;
            this._zuozhuang = 1;
        }
        else if (evt.currentTarget == this.zuozhuang2) {
            this.zuozhuang2.selected = true;
            this.zuozhuang1.selected = false;
            this.zuozhuang3.selected = false;
            this.zuozhuang4.selected = false;
            this._zuozhuang = 2;
        }
        else if (evt.currentTarget == this.zuozhuang3) {
            this.zuozhuang3.selected = true;
            this.zuozhuang2.selected = false;
            this.zuozhuang1.selected = false;
            this.zuozhuang4.selected = false;
            this._zuozhuang = 3;
        }
        else if (evt.currentTarget == this.zuozhuang4) {
            this.zuozhuang4.selected = true;
            this.zuozhuang2.selected = false;
            this.zuozhuang1.selected = false;
            this.zuozhuang3.selected = false;
            this._zuozhuang = 4;
        }
        else if (evt.currentTarget == this.beishu1) {
            this.beishu1.selected = true;
            this.beishu2.selected = false;
            this.beishu3.selected = false;
            this._beishu = 1;
        }
        else if (evt.currentTarget == this.beishu2) {
            this.beishu2.selected = true;
            this.beishu1.selected = false;
            this.beishu3.selected = false;
            this._beishu = 2;
        }
        else if (evt.currentTarget == this.beishu3) {
            this.beishu3.selected = true;
            this.beishu2.selected = false;
            this.beishu1.selected = false;
            this._beishu = 3;
        }
        else if (evt.currentTarget == this.difen1) {
            this.difen1.selected = true;
            this.difen2.selected = false;
            this.difen3.selected = false;
            this.difen = 1;
        }
        else if (evt.currentTarget == this.difen2) {
            this.difen2.selected = true;
            this.difen1.selected = false;
            this.difen3.selected = false;
            this.difen = 2;
        }
        else if (evt.currentTarget == this.difen3) {
            this.difen3.selected = true;
            this.difen2.selected = false;
            this.difen1.selected = false;
            this.difen = 3;
        }
        else if (evt.currentTarget == this.pay1) {
            this.pay1.selected = true;
            this.pay2.selected = false;
            this._payWay = 2;
            this["roomCardNumTF"].text = "（1张房卡）";
            this["roomCardNumTF2"].text = "（2张房卡）";
        }
        else if (evt.currentTarget == this.payWay1) {
            this.payWay1.selected = true;
            this.payWay2.selected = false;
            this._payWay = 2;
            this["roomCardNumTF3"].text = "（1张房卡）";
            this["roomCardNumTF4"].text = "（2张房卡）";
        }
        else if (evt.currentTarget == this.pay2) {
            this.pay2.selected = true;
            this.pay1.selected = false;
            this._payWay = 1;
            this["roomCardNumTF"].text = "（4张房卡）";
            this["roomCardNumTF2"].text = "（7张房卡）";
        }
        else if (evt.currentTarget == this.payWay2) {
            this.payWay2.selected = true;
            this.payWay1.selected = false;
            this._payWay = 1;
            this["roomCardNumTF3"].text = "（4张房卡）";
            this["roomCardNumTF4"].text = "（7张房卡）";
        }
    };
    CreateRoomView2.prototype.show = function () {
        this._tabIndex = -1;
        this.showTabView(1);
        this.bindButton(this.createBtn);
        this.bindButton(this.tab1);
        this.bindButton(this.tab2);
    };
    CreateRoomView2.prototype.showTabView = function (tabIndex) {
        if (tabIndex == this._tabIndex)
            return;
        this._tabIndex = tabIndex;
        if (this._tabIndex == 1) {
            this.zjhGroup.visible = true;
            this.nnGroup.visible = false;
            this.tab1.texture = RES.getRes("hall_json.gameTab1_select");
            this.tab2.texture = RES.getRes("hall_json.gameTab2");
            this.eightRoundChk.selected = true;
            this.sixteenRoundChk.selected = false;
            this._round = 8;
            this["roomCardNumTF3"].text = "（1张房卡）";
            this["roomCardNumTF4"].text = "（2张房卡）";
        }
        else {
            this.zjhGroup.visible = false;
            this.nnGroup.visible = true;
            this.tab1.texture = RES.getRes("hall_json.gameTab1");
            this.tab2.texture = RES.getRes("hall_json.gameTab2_select");
            this.tenRoundChk.selected = true;
            this.tweentyRoundChk.selected = false;
            this._round = 10;
            this["roomCardNumTF"].text = "（1张房卡）";
            this["roomCardNumTF2"].text = "（2张房卡）";
        }
    };
    CreateRoomView2.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.createBtn) {
            var data = {};
            data["gameType"] = (this._tabIndex == 1) ? GameGlobal.ZJH_TYPE : GameGlobal.NIUNIU_TYPE;
            data["msgType"] = NetAction.createRoom;
            if (this._tabIndex == 1) {
                data["msg"] = { "payType": this._payWay, "playerId": MyUserInfo.getInstance().userId, "totalGames": this._round };
            }
            else {
                data["msg"] = { "payType": this._payWay, "playerId": MyUserInfo.getInstance().userId, "totalGames": this._round,
                    "roomBankerType": this._zuozhuang, "multipleLimit": this._beishu, "buttomScoreType": this.difen };
            }
            SocketCommand.getInstance().send(data);
        }
        else if (clickTarget == this.tab1) {
            this.showTabView(1);
        }
        else if (clickTarget == this.tab2) {
            this.showTabView(2);
        }
    };
    return CreateRoomView2;
}(IFrameBase));
__reflect(CreateRoomView2.prototype, "CreateRoomView2");
//# sourceMappingURL=CreateRoomView2.js.map