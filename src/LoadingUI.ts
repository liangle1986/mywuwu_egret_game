//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
/**
 * 资源加载界面
 */
class LoadingUI extends egret.Sprite {

    private _bg: egret.Bitmap;
    private _logo: egret.Bitmap;
    private _wxLoginBtn: DButton;
    // private _roleImg:egret.Bitmap;
    private _xieyiCB: DCheckBox;
    private _progressBar: DProgressBar; //进度条
    // private _tipTF:egret.TextField; //健康提示
    private _tipImg: egret.Bitmap;
    private _dataLoadingImg: egret.Bitmap;

    public constructor() {
        super();

        this.createView();
    }

    // 显示登录页面
    public showLogin(): void {
        // 设置控件不可被交互
        this._progressBar.visible = false;

        // 登录按钮
        this._wxLoginBtn = new DButton("hall_json.wxLoginBtn");
        this.addChild(this._wxLoginBtn);
        this._wxLoginBtn.y = 428;
        this._wxLoginBtn.x = (GameGlobal.stageW - this._wxLoginBtn.width) >> 1;

        // 复选框，可以填字符和图片
        this._xieyiCB = new DCheckBox();
        this._xieyiCB.setLabel("hall_json.xieyiTextBtn", true, 50, 4);
        this.addChild(this._xieyiCB);
        this._xieyiCB.x = (GameGlobal.stageW - this._xieyiCB.width) >> 1;
        this._xieyiCB.y = 505;
        this._xieyiCB.selected = true;
        this._xieyiCB.addEventListener(GameEventManager.SELECTED, this.onSelected, this);

        this._wxLoginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }

    // 复选框选中事件回调
    private onSelected(evt: DEvent): void {
        SocketCommand.getInstance().connect();
    }

    // 点击登录按钮调用
    private onTouchTap(evt: egret.TouchEvent): void {
        if (!this._xieyiCB.selected) {
            AlertView.getInstance().show("请勾选阅读用户协议！");
            return;
        }


        // this.weixiLogin();
        if (GameGlobal.debug) {
            GameEventManager.dispatchEvent(GameEventManager.LOGIN_SUCCESS);
            return;
        }
        else {
            if (DUtils.isNative()) {
                // 需要自己开发app的接口可以实现微信，支付宝等登录
                egret.ExternalInterface.call("login", "微信登录啦！！！");
            }
            else {
                var command: CommandVo = new CommandVo();
                command.action = HttpCommand.LOGIN;
                HttpCommand.send(command, this, this.loginResponse);
            }

            // var command:CommandVo = new CommandVo();
            // command.action = HttpCommand.LOGIN;
            // HttpCommand.send(command, this, this.loginResponse);

        }
    }

    // 登录回调参数
    private loginResponse(result: Object): void {
        var data: Object = result["data"];
        // 设置全局参数
        MyUserInfo.getInstance().init(data);
        GameGlobal.SOCKET_IP = data["serverIp"];
        GameGlobal.SOCKET_PORT = data["port"];
        GameModel.instance().token = data["token"];

        egret.ExternalInterface.call("sendToken", "http://" + GameGlobal.SOCKET_IP + ":" + GameGlobal.SOCKET_PORT + "/game/upload" + "|" + GameModel.instance().token);
        //保存上次进入房间号
        if (data.hasOwnProperty("roomId") && data["roomId"] != null) {
            GameModel.instance().roomId = data["roomId"];
        }

        GameEventManager.dispatchEvent(GameEventManager.LOGIN_SUCCESS, result);
    }

    private textField: egret.TextField;

    /**
     * 加载完成设置可交互
     */
    public startLoad(): void {
        if (this._wxLoginBtn && this._wxLoginBtn.stage) return;
        this._progressBar.visible = true;
    }

    /**
     * 重置舞台大小
     */
    public resize(): void {
        // this._logo.x = GameGlobal.stageW - 823;
        if (this._progressBar)
            this._progressBar.x = GameGlobal.stageW - 704;
        // this._tipTF.x = (GameGlobal.stageW - this._tipTF.width) >> 1;
    }

    // 创建视图
    private createView(): void {
        // 登录页面背景
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes("login_bg_jpg");
        this.addChild(this._bg);
        this._bg.width = GameGlobal.stage.stageWidth;
        this._bg.height = GameGlobal.stage.stageHeight;

        // 添加logo
        this._logo = new egret.Bitmap();
        this._logo.texture = RES.getRes("logo_png");
        this._logo.y = 31;
        this.addChild(this._logo);
        this._logo.x = (GameGlobal.stageW - this._logo.width) >> 1;

        // 让log产生动画效果
        var maskShape: egret.Shape = new egret.Shape();
        maskShape.graphics.beginFill(0);
        maskShape.graphics.drawRect(0, 0, this._logo.width, this._logo.height);
        maskShape.graphics.endFill();
        this.addChild(maskShape);
        maskShape.x = this._logo.x - this._logo.width;
        maskShape.y = this._logo.y;
        this._logo.mask = maskShape;

        // 进度条
        this._progressBar = new DProgressBar();
        this._progressBar.setValue(0);
        this.addChild(this._progressBar);
        this._progressBar.y = 500;
        this._progressBar.visible = false;

        egret.Tween.get(maskShape).to({ x: this._logo.x }, 500).call(() => {
            this.startLoad();

        }, this);

        this._tipImg = DUtils.createBitmapByName("playerNotice_txt_png");
        this.addChild(this._tipImg);
        this._tipImg.x = (GameGlobal.stageW - this._tipImg.width) >> 1;
        this._tipImg.y = 568;

        this.resize();
    }

    public setProgress(current: number, total: number): void {
        this._progressBar.setValue(current, total);
    }

}
