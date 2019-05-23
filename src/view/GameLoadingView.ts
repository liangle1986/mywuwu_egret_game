/**
 * 游戏加载视图
 */
class GameLoadingView extends egret.Sprite
{
	public constructor() {
		super();

		this.initView();
	}
	private _progressBar:DProgressBar; //进度条
	private _loadingText:egret.TextField;

	private static _instance:GameLoadingView;
	public static getInstance():GameLoadingView
	{
		if(GameLoadingView._instance == null)
			GameLoadingView._instance = new GameLoadingView();
		return GameLoadingView._instance;
	}

	public show():void
	{
		GameGlobal.stage.addChild(this);
	}

	public hide():void
	{
		if(GameGlobal.stage.contains(this))
			GameGlobal.stage.removeChild(this);
	}

	// 游戏进度
	private initView():void
	{
		this.touchEnabled = true;

		// 绘制规矩
		var bgShape:egret.Shape = new egret.Shape();
		bgShape.graphics.beginFill(0);
		bgShape.graphics.drawRect(0, 0, GameGlobal.stageW, GameGlobal.stageH);
		bgShape.graphics.endFill();
		this.addChild(bgShape);

		// 进度
		this._progressBar = new DProgressBar();
        this._progressBar.setValue(0);
        this.addChild(this._progressBar);
      	this._progressBar.y = ((GameGlobal.stage.stageHeight - this._progressBar.height ) >> 1) + 50;
        this._progressBar.x = (GameGlobal.stage.stageWidth - this._progressBar.width) >> 1;

		// 提示字体
		this._loadingText = new egret.TextField();
        this._loadingText.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._loadingText.size = 28;
        this._loadingText.textAlign = egret.HorizontalAlign.CENTER;
        this._loadingText.width = this._progressBar.width;
        this._loadingText.text = "拼命加载中，请稍后...";
        this.addChild(this._loadingText);
        this._loadingText.textColor = 0xffffff;
        this._loadingText.x = this._progressBar.x;
        this._loadingText.y = this._progressBar.y - 50;
	}

	public setProgress(current:number, total:number):void 
	{
        this._progressBar.setValue(current, total);
    }
}