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
 * 小结算界面
 */
var GameResult = (function (_super) {
    __extends(GameResult, _super);
    function GameResult() {
        var _this = _super.call(this) || this;
        // private _otherPlayerContainer:egret.DisplayObjectContainer;
        _this._showJiesuan = false;
        _this.init();
        return _this;
    }
    GameResult.prototype.updateBtn = function (type) {
        if (type == 1) {
            this._showJiesuan = true;
            // this._playAgainBtn.visible = true;
            // this._zhanjiBtn.visible = false;
        }
        else {
            this._showJiesuan = false;
            // this._playAgainBtn.visible = false;
            // this._zhanjiBtn.visible = true;
        }
    };
    GameResult.prototype.setData = function (data) {
        this._data = data;
        var myData = {};
        var curWinnerId = data["curWinnerId"];
        if (curWinnerId == MyUserInfo.getInstance().userId) {
            this._resultImg.texture = RES.getRes("game_json.winText");
            SoundManager.instance.playSound("win_mp3");
        }
        else {
            this._resultImg.texture = RES.getRes("game_json.failText");
            SoundManager.instance.playSound("fail_mp3");
        }
        var playerList = data["playerList"];
        // var otherPlayerList:Array<any> = [];
        for (var i = 0; i < playerList.length; i++) {
            var playerData = playerList[i];
            if (playerData["playerId"] == MyUserInfo.getInstance().userId) {
                // this._myNickNameTF.text = MyUserInfo.getInstance().userName;
                // this._myWinTF.text = playerData["curScore"];
                var cardList = playerData["cardList"];
                if (cardList != null && cardList.length == 3) {
                    // this._myCardGroup.setPokerData(cardList);
                    // this._myCardGroup.showPokerValue(true);
                }
            }
            else {
                // otherPlayerList.push(playerData);
            }
        }
        while (this._listContainer.numChildren > 0) {
            this._listContainer.removeChildAt(0);
        }
        var len = playerList.length;
        var tile;
        for (var i = 0; i < len; i++) {
            tile = new PlayerResultTile();
            tile.setData(playerList[i]);
            this._listContainer.addChild(tile);
            tile.y = i * 85;
        }
    };
    GameResult.prototype.showComplete = function () {
        this._bg = new egret.Bitmap();
        this.addChild(this._bg);
        this._bg.texture = RES.getRes("jiesuanBg_png");
        this._resultImg = new egret.Bitmap();
        this._resultImg.texture = RES.getRes("game_json.winText");
        this.addChild(this._resultImg);
        this._resultImg.x = 173;
        this._resultImg.y = -23;
        var title = new egret.TextField();
        title.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        title.textColor = 0xeeb72f;
        title.size = 25;
        title.bold = true;
        title.textAlign = egret.HorizontalAlign.LEFT;
        title.x = 38;
        title.y = 80;
        title.text = "玩家信息";
        this.addChild(title);
        var scoreTF = new egret.TextField();
        scoreTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        scoreTF.textColor = 0xeeb72f;
        scoreTF.size = 25;
        scoreTF.bold = true;
        scoreTF.textAlign = egret.HorizontalAlign.LEFT;
        scoreTF.x = 280;
        scoreTF.y = 80;
        scoreTF.text = "总成绩";
        this.addChild(scoreTF);
        var pokerType = new egret.TextField();
        pokerType.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        pokerType.textColor = 0xeeb72f;
        pokerType.size = 25;
        pokerType.bold = true;
        pokerType.textAlign = egret.HorizontalAlign.LEFT;
        pokerType.x = 487;
        pokerType.y = 80;
        pokerType.text = "牌型";
        this.addChild(pokerType);
        // title.width = 218;
        this._listContainer = new egret.DisplayObjectContainer();
        this.addChild(this._listContainer);
        this._listContainer.x = 43;
        this._listContainer.y = 153;
        this._closeBtn = new DButton("game_json.closeBtn3");
        this.addChild(this._closeBtn);
        this._closeBtn.x = 522;
        this._closeBtn.y = -18;
        this.iframeWidth = this._bg.width;
        this.iframeHeight = this._bg.height;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0, 0.5);
        bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
        bg.graphics.endFill();
        this.addChildAt(bg, 0);
        bg.x = -(GameGlobal.stage.stageWidth - this.iframeWidth) >> 1;
        bg.y = -(GameGlobal.stage.stageHeight - this.iframeHeight) >> 1;
        this._closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    /**
     *
     */
    GameResult.prototype.onTouchTap = function (evt) {
        /*if(evt.currentTarget == this._closeBtn)
        {
            GameEventManager.dispatchEvent(GameEventManager.NEXT_ROUND);
        }
        else
        {
            GameGlobal.iframeLayer.showIFrame(JieSuanView);
            GameGlobal.iframeLayer.hideIFrame(GameResult);

            var jiesuanView:JieSuanView = GameGlobal.iframeLayer.getIFrame(JieSuanView);
            jiesuanView.setData(this._data);
        }*/
        if (this._showJiesuan) {
            GameGlobal.iframeLayer.showIFrame(JieSuanView, this._data);
            GameGlobal.iframeLayer.hideIFrame2(GameResult);
        }
        else {
            GameEventManager.dispatchEvent(GameEventManager.NEXT_ROUND);
        }
    };
    return GameResult;
}(IFrameBase));
__reflect(GameResult.prototype, "GameResult");
var PlayerResultTile = (function (_super) {
    __extends(PlayerResultTile, _super);
    function PlayerResultTile() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    PlayerResultTile.prototype.setData = function (data) {
        this._data = data;
        this._winTF.text = data["curScore"];
        var playerInfo = GameGlobal.mapLayer.getBattle().getPlayerInfoById(data["playerId"]);
        if (playerInfo != null) {
            var nickName = playerInfo["nickName"];
            if (nickName.length > 10) {
                nickName = nickName.substr(0, 10) + "...";
            }
            this._nickNameTF.text = nickName;
            var headImgUrl = playerInfo["headImgUrl"];
            if (headImgUrl != null)
                this.loadFace(headImgUrl);
        }
        var cardList = data["cardList"];
        if (cardList != null && cardList.length == 3) {
            this._cardGroup.setPokerData(cardList);
            this._cardGroup.showPokerValue(true);
        }
    };
    PlayerResultTile.prototype.loadFace = function (url) {
        // var loader: egret.URLLoader = new egret.URLLoader();
        // //设置加载方式为纹理
        // loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        // //添加加载完成侦听
        // loader.addEventListener(egret.Event.COMPLETE,this.imageComplete,this);
        // loader.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onLoadFaceError,this);
        // var request: egret.URLRequest = new egret.URLRequest(url);
        // //开始加载
        // loader.load(request);
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, this.imageComplete, this);
        imageLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFaceError, this);
        imageLoader.load(url);
    };
    PlayerResultTile.prototype.onLoadFaceError = function (evt) {
        console.log("load face ioerror");
    };
    PlayerResultTile.prototype.imageComplete = function (evt) {
        console.log("load face complete");
        this._faceImg.texture = evt.target.data;
        this._faceImg.width = 34;
        this._faceImg.height = 35;
    };
    PlayerResultTile.prototype.initView = function () {
        this._faceImg = new egret.Bitmap();
        this.addChild(this._faceImg);
        this._nickNameTF = new egret.TextField();
        this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._nickNameTF.textColor = 0xffffff;
        this._nickNameTF.size = 20;
        this._nickNameTF.bold = true;
        this._nickNameTF.textAlign = egret.HorizontalAlign.LEFT;
        this._nickNameTF.x = 51;
        this._nickNameTF.y = 5;
        this._nickNameTF.text = "--";
        this.addChild(this._nickNameTF);
        this._cardGroup = new CardGroup();
        this._cardGroup.x = 408;
        this._cardGroup.y = -18;
        this.addChild(this._cardGroup);
        this._cardGroup.isMySelf = false;
        this._cardGroup.setPokerSize(0.61, 25);
        var chipIcon = new egret.Bitmap();
        this.addChild(chipIcon);
        chipIcon.texture = RES.getRes("game_json.chipDefault");
        chipIcon.x = 242;
        chipIcon.y = 4;
        //其他玩家输赢
        this._winTF = new egret.TextField();
        this._winTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._winTF.textColor = 0xffffff;
        this._winTF.size = 25;
        this._winTF.bold = true;
        this._winTF.textAlign = egret.HorizontalAlign.LEFT;
        this._winTF.x = 285;
        this._winTF.y = 2;
        this._winTF.text = "--";
        this.addChild(this._winTF);
    };
    return PlayerResultTile;
}(egret.Sprite));
__reflect(PlayerResultTile.prototype, "PlayerResultTile");
//# sourceMappingURL=GameResult.js.map