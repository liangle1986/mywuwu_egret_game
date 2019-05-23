/**
 * 游戏大厅
 */
class Game extends egret.Sprite {
	public constructor() {
		super();


	}

	//初始化游戏大厅
	public init(): void {
		//layer
		GameGlobal.mapLayer = new MapLayer();
		this.addChild(GameGlobal.mapLayer);

		//地图UI层，顶部条等
		GameGlobal.mapUILayer = new MapUILayer();
		this.addChild(GameGlobal.mapUILayer);

		//弹窗层
		GameGlobal.iframeLayer = new IFrameLayer();
		this.addChild(GameGlobal.iframeLayer);

		//游戏最高层（仅次于鼠标指针、Tips之下）
		GameGlobal.topLayer = new TopLayer();
		this.addChild(GameGlobal.topLayer);

		//新手引导层
		GameGlobal.newbeeGuideLayer = new NewbeeGuideLayer();
		this.addChild(GameGlobal.newbeeGuideLayer);

		MyUserInfo.getInstance();

		GameGlobal.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
	}

	// 重置舞台大小
	private onResize(evt: egret.Event): void {
		GameGlobal.mapUILayer.resize();
	}
}