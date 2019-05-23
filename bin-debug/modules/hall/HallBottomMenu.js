var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 大厅底部菜单
 */
var HallBottomMenu = (function () {
    function HallBottomMenu(ui) {
        this._buttons = [];
        this._ui = ui;
        this.initView();
    }
    HallBottomMenu.prototype.initView = function () {
        var buttonNames = ["shareBtn", "tuiguangBtn", "choujiangBtn", "activityBtn", "mallBtn"];
        var len = buttonNames.length;
        this._buttons = [];
        for (var i = 0; i < len; i++) {
            var button = this._ui[buttonNames[i]]; //new DButton("hall_json."+buttonNames[i]);
            // button.x = 164 * i;
            button.name = buttonNames[i];
            // this.addChild(button);
            button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
            // if(i == len - 1)
            // {
            // 	button.x = 627;
            // 	button.y = 24;
            // }
        }
    };
    HallBottomMenu.prototype.onTouchTapHandle = function (evt) {
        SoundManager.instance.playSound("button_mp3");
        switch (evt.currentTarget.name) {
            case "shareBtn":
                GameGlobal.iframeLayer.showIFrame(ShareView);
                break;
            case "tuiguangBtn":
                GameGlobal.iframeLayer.showIFrame(TuiGuangView);
                // egret.ExternalInterface.call("openUrl", GameGlobal.TUIGUANG_URL);
                break;
            case "choujiangBtn":
                AlertView.getInstance().show("功能暂未开放，敬请期待！");
                break;
            case "activityBtn":
                AlertView.getInstance().show("功能暂未开放，敬请期待！");
                break;
            case "mallBtn":
                GameGlobal.iframeLayer.showIFrame(MallView2);
                break;
        }
    };
    return HallBottomMenu;
}());
__reflect(HallBottomMenu.prototype, "HallBottomMenu");
//# sourceMappingURL=HallBottomMenu.js.map