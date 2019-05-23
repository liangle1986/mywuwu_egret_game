var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameGlobal = (function () {
    function GameGlobal() {
    }
    GameGlobal.getGameName = function (gameType) {
        if (gameType == 1) {
            return "牛牛";
        }
        else if (gameType == 3) {
            return "扎金花";
        }
        return "";
    };
    GameGlobal.init = function (root, stage, config) {
        if (config === void 0) { config = null; }
        GameGlobal.root = root;
        GameGlobal.stage = stage;
        if (config) {
            GameGlobal.debug = (config.debug == 1);
            GameGlobal.version = config.version;
        }
        GameGlobal.stage.addEventListener(egret.Event.RESIZE, this.onStageSizeChanged, this, false, Number.MAX_VALUE);
        this.onStageSizeChanged();
    };
    GameGlobal.onStageSizeChanged = function (event) {
        if (event === void 0) { event = null; }
        GameGlobal.stageW = GameGlobal.stage.stageWidth;
        GameGlobal.stageH = GameGlobal.stage.stageHeight;
        GameGlobal.halfStageW = GameGlobal.stageW / 2;
        GameGlobal.halfStageH = GameGlobal.stageH / 2;
    };
    //http接口
    GameGlobal.HTTP_API_URL = "http://game.yl.worldwalker.cn/game/";
    GameGlobal.UPDATE_VOICE_API = "http://game.yl.worldwalker.cn/backend/uploadVoice";
    GameGlobal.TUIGUANG_URL = "http://game.yl.worldwalker.cn/tg/index.html";
    //socket接口
    GameGlobal.SOCKET_IP = "119.23.57.236";
    GameGlobal.SOCKET_PORT = 9000;
    GameGlobal.HTTP_PORT = 8080;
    //cdn
    GameGlobal.CDN_URL = "";
    //当前平台
    GameGlobal.platform = "default";
    //版本
    GameGlobal.version = "1.2";
    GameGlobal.DEFAULT_FONT_NAME = "微软雅黑";
    GameGlobal.APPName = "yule_qipai";
    //是否debug模式
    GameGlobal.debug = false;
    GameGlobal.stageW = 1136;
    GameGlobal.stageH = 640;
    GameGlobal.useWeixin = false;
    //设计尺寸
    GameGlobal.designW = 1136;
    GameGlobal.designH = 640;
    //层级信息
    GameGlobal.mapLayer = null;
    GameGlobal.mapBGLayer = null;
    GameGlobal.mapUILayer = null;
    GameGlobal.iframeLayer = null;
    /** 是否显示剧情 */
    GameGlobal.story_flag = false;
    /** 是否显示新手引导 */
    GameGlobal.newbee_flag = false;
    GameGlobal.showVersion = true;
    GameGlobal.ZJH_TYPE = 3;
    GameGlobal.NIUNIU_TYPE = 1;
    GameGlobal.gameType = 1; //扎金花为3，牛牛为1
    GameGlobal.teahouse_ownerId = "";
    GameGlobal.isDianXiaoer = 0;
    GameGlobal.MAX_PLAYER_COUNT = 6;
    GameGlobal.shareTitle = "楚风鱼乐棋牌";
    GameGlobal.shareDesc = "最地道的本地棋牌强制来袭，经典茶楼模式，和好友一起约局对战，享受...";
    // 游戏协议
    GameGlobal.xieyiText = '《健康游戏忠告》\n抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。倡导理性消费 享受竞技快乐。 一、协议总则\n1. 本《用户协议》为玩家（即用户）与66电玩游戏中心科技有限公司（以下简称66电玩游戏中心公司）就66电玩游戏中心公司所提供的服务达成的用户协议。66电玩游戏中心公司在此特别提醒用户认真阅读、充分理解本《用户服务协议》（下称《用户协议》）--- 用户应认真阅读、充分理解本《用户协议》中各条款，特别涉及免除或者限制66电玩游戏中心公司责任的免责条款，对用户的权利限制的条款，法律适用、争议解决方式的条款。\n 2. 请用户审慎阅读并选择同意或不同意本《用户协议》，除非用户接受本《用户协议》所有条款，否则用户无权下载、安装、升级、登陆、显示、运行、截屏等方式使用本软件及其相关服务。用户的下载、安装、显示、帐号获取和登录、截屏等行为表明用户自愿接受本用户协议的全部内容并受其约束，不得以任何理由包括但不限于未能认真阅读本用户协议等作为纠纷抗辩理由。\n3. 本《用户协议》可由66电玩游戏中心公司随时更新，更新后的用户协议条款一旦公布即代替原来的用户协议条款，不再另行个别通知。用户可重新下载安装本软件或网站查阅最新版用户协议条款。在66电玩游戏中心公司修改《用户协议》条款后，如果用户不接受修改后的条款，请立即停止使用66电玩游戏中心公司提供的软件和服务，用户继续使用66电玩游戏中心公司提供的软件和服务将被视为已接受了修改后的用户协议。\n 4. 本《用户协议》内容包括但不限于本用户协议以下内容，针对某些具体服务所约定的管理办法、公告、重要提示、指引、说明等均为本用户协议的补充内容，为本用户协议不可分割之组成部分，具有本用户协议同等法律效力，接受本用户协议即视为用户自愿接受以上管理办法、公告、重要提示、指引、说明等并受其约束；否则请用户立即停止使用66电玩游戏中心公司提供的软件和服务。\n 5. 本公司只为用户提供本责任条款内声明的管理服务项目，并保留在非正常情况下有可能导致网站部分功能暂时中断的临时调整处理权，例如网络或服务器故障、计算 机程式错误、外来非法程序入侵、自然灾害、相关国家法律政策变动等，并对此类情况所造成的任何用户帐号资料损失不承担赔偿责任，用户游戏帐号资料将在数据 安全机制范围内受到尽可能完善的保护和备份，用户无权单方面要求帐号资料恢复到某状态。\n 二、特殊规定\n 1. 未满十八周岁的未成年人应经其监护人陪同阅读本服务条款并表示同意，方可接受本服务条款。监护人应加强对未成年人的监督和保护，因其未谨慎履行监护责任而损害未成年人利益或者影响66乐园公司利益的，应由监护人承担责任。\n 2. 青少年用户应遵守全国青少年网络文明公约：要善于网上学习，不浏览不良信息；要诚实友好交流，不侮辱欺诈他人；要增强自护意识，不随意约会网友；要维护网络安全，不破坏网络秩序；要有益身心健康，不沉溺虚拟时空。\n';
    return GameGlobal;
}());
__reflect(GameGlobal.prototype, "GameGlobal");
//# sourceMappingURL=GameGlobal.js.map