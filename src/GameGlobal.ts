interface IConfig {
	debug: number,
	version: string,
	apiUrl: string,
	story_flag: number, //是否显示剧情
	newbee_flag: number //是否显示新手引导
}
class GameGlobal {
	//http接口
	public static HTTP_API_URL: string = "http://game.yl.worldwalker.cn/game/";
	public static UPDATE_VOICE_API: string = "http://game.yl.worldwalker.cn/backend/uploadVoice";
	public static TUIGUANG_URL: string = "http://game.yl.worldwalker.cn/tg/index.html";
	//socket接口
	public static SOCKET_IP: string = "119.23.57.236";
	public static SOCKET_PORT: number = 9000;
	public static HTTP_PORT: number = 8080;
	//cdn
	public static CDN_URL: string = "";
	//当前平台
	public static platform: string = "default";
	//版本
	public static version: string = "1.2";
	public static DEFAULT_FONT_NAME: string = "微软雅黑";
	public static APPName: string = "yule_qipai";
	//是否debug模式
	public static debug: boolean = false;
	public static stageW: number = 1136;
	public static stageH: number = 640;
	public static useWeixin: boolean = false;

	public static halfStageW: number;
	public static halfStageH: number;
	//设计尺寸
	public static designW: number = 1136;
	public static designH: number = 640;
	public static root: egret.DisplayObjectContainer;
	public static stage: egret.Stage;

	//层级信息
	public static mapLayer: MapLayer = null;
	public static mapBGLayer: MapBgLayer = null;
	public static mapUILayer: MapUILayer = null;
	public static iframeLayer: IFrameLayer = null;
	public static topLayer: TopLayer;
	public static newbeeGuideLayer: NewbeeGuideLayer;
	/** 是否显示剧情 */
	public static story_flag: boolean = false;
	/** 是否显示新手引导 */
	public static newbee_flag: boolean = false;

	public static versionTF: egret.TextField;
	public static showVersion: boolean = true;

	public static ZJH_TYPE: number = 3;
	public static NIUNIU_TYPE: number = 1;
	public static gameType: number = 1; //扎金花为3，牛牛为1

	public static teahouse_ownerId: string = "";
	public static isDianXiaoer: number = 0;
	public static MAX_PLAYER_COUNT: number = 6;
	public static shareTitle: string = "楚风鱼乐棋牌";
	public static shareDesc: string = "最地道的本地棋牌强制来袭，经典茶楼模式，和好友一起约局对战，享受...";

	// 游戏协议
	public static xieyiText: string = '《健康游戏忠告》\n抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。倡导理性消费 享受竞技快乐。 一、协议总则\n1. 本《用户协议》为玩家（即用户）与66电玩游戏中心科技有限公司（以下简称66电玩游戏中心公司）就66电玩游戏中心公司所提供的服务达成的用户协议。66电玩游戏中心公司在此特别提醒用户认真阅读、充分理解本《用户服务协议》（下称《用户协议》）--- 用户应认真阅读、充分理解本《用户协议》中各条款，特别涉及免除或者限制66电玩游戏中心公司责任的免责条款，对用户的权利限制的条款，法律适用、争议解决方式的条款。\n 2. 请用户审慎阅读并选择同意或不同意本《用户协议》，除非用户接受本《用户协议》所有条款，否则用户无权下载、安装、升级、登陆、显示、运行、截屏等方式使用本软件及其相关服务。用户的下载、安装、显示、帐号获取和登录、截屏等行为表明用户自愿接受本用户协议的全部内容并受其约束，不得以任何理由包括但不限于未能认真阅读本用户协议等作为纠纷抗辩理由。\n3. 本《用户协议》可由66电玩游戏中心公司随时更新，更新后的用户协议条款一旦公布即代替原来的用户协议条款，不再另行个别通知。用户可重新下载安装本软件或网站查阅最新版用户协议条款。在66电玩游戏中心公司修改《用户协议》条款后，如果用户不接受修改后的条款，请立即停止使用66电玩游戏中心公司提供的软件和服务，用户继续使用66电玩游戏中心公司提供的软件和服务将被视为已接受了修改后的用户协议。\n 4. 本《用户协议》内容包括但不限于本用户协议以下内容，针对某些具体服务所约定的管理办法、公告、重要提示、指引、说明等均为本用户协议的补充内容，为本用户协议不可分割之组成部分，具有本用户协议同等法律效力，接受本用户协议即视为用户自愿接受以上管理办法、公告、重要提示、指引、说明等并受其约束；否则请用户立即停止使用66电玩游戏中心公司提供的软件和服务。\n 5. 本公司只为用户提供本责任条款内声明的管理服务项目，并保留在非正常情况下有可能导致网站部分功能暂时中断的临时调整处理权，例如网络或服务器故障、计算 机程式错误、外来非法程序入侵、自然灾害、相关国家法律政策变动等，并对此类情况所造成的任何用户帐号资料损失不承担赔偿责任，用户游戏帐号资料将在数据 安全机制范围内受到尽可能完善的保护和备份，用户无权单方面要求帐号资料恢复到某状态。\n 二、特殊规定\n 1. 未满十八周岁的未成年人应经其监护人陪同阅读本服务条款并表示同意，方可接受本服务条款。监护人应加强对未成年人的监督和保护，因其未谨慎履行监护责任而损害未成年人利益或者影响66乐园公司利益的，应由监护人承担责任。\n 2. 青少年用户应遵守全国青少年网络文明公约：要善于网上学习，不浏览不良信息；要诚实友好交流，不侮辱欺诈他人；要增强自护意识，不随意约会网友；要维护网络安全，不破坏网络秩序；要有益身心健康，不沉溺虚拟时空。\n';


	public static getGameName(gameType: number): string {
		if (gameType == 1) {
			return "牛牛";
		}
		else if (gameType == 3) {
			return "扎金花";
		}
		return "";
	}

	public static init(root: egret.DisplayObjectContainer, stage: egret.Stage, config: IConfig = null): void {
		GameGlobal.root = root;
		GameGlobal.stage = stage;

		if (config) {
			GameGlobal.debug = (config.debug == 1);
			GameGlobal.version = config.version;
		}

		GameGlobal.stage.addEventListener(egret.Event.RESIZE, this.onStageSizeChanged, this, false, Number.MAX_VALUE);
		this.onStageSizeChanged();
	}

	private static onStageSizeChanged(event: egret.Event = null): void {
		GameGlobal.stageW = GameGlobal.stage.stageWidth;
		GameGlobal.stageH = GameGlobal.stage.stageHeight;
		GameGlobal.halfStageW = GameGlobal.stageW / 2;
		GameGlobal.halfStageH = GameGlobal.stageH / 2;
	}
}