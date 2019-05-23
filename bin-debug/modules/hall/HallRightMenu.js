var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HallRightMenu = (function () {
    function HallRightMenu(ui) {
        this._buttons = [];
        this._ui = ui;
        this.initView();
    }
    HallRightMenu.prototype.initView = function () {
        var buttonNames = ["createTeahouseBtn", "joinTeahouseBtn", "createRoomBtn", "joinRoomBtn"];
        var len = buttonNames.length;
        this._buttons = [];
        for (var i = 0; i < len; i++) {
            var button = this._ui[buttonNames[i]]; //new DButton("hall_json."+buttonNames[i]);
            // button.y = 106 * i;
            button.name = buttonNames[i];
            // this.addChild(button);
            button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
        }
    };
    HallRightMenu.prototype.onTouchTapHandle = function (evt) {
        SoundManager.instance.playSound("button_mp3");
        switch (evt.currentTarget.name) {
            //创建茶楼
            case "createTeahouseBtn":
                GameGlobal.iframeLayer.showIFrame(CreateTeahouseView);
                break;
            //创建房间
            case "createRoomBtn":
                GameGlobal.iframeLayer.showIFrame(CreateRoomView2);
                break;
            case "joinTeahouseBtn":
                GameGlobal.iframeLayer.showIFrame(JoinTeahouseView);
                break;
            case "joinRoomBtn":
                GameGlobal.iframeLayer.showIFrame(JoinRoomView);
                break;
        }
    };
    return HallRightMenu;
}());
__reflect(HallRightMenu.prototype, "HallRightMenu");
//# sourceMappingURL=HallRightMenu.js.map