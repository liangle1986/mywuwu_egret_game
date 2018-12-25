class Login extends egret.Sprite {
  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  private onAddToStage(event: egret.Event) {
    egret.lifecycle.addLifecycleListener(context => {
      // custom lifecycle plugin

      context.onUpdate = () => {};
    });

    egret.lifecycle.onPause = () => {
      egret.ticker.pause();
    };

    egret.lifecycle.onResume = () => {
      egret.ticker.resume();
    };

    this.runGame().catch(e => {
      console.log(e);
    });
  }

  private async runGame() {
    console.log("login");
    await this.loadResource();
    this.createLoginScene();
    
  }

  /**
   * 创建登录场景
   * Create a login scene
   */
  private async createLoginScene() {
    let log_bg: egret.Bitmap = await bitmap.createBitmapByName("login_bg_jpg");
    this.stage.addChild(log_bg);
    log_bg.width = this.stage.stageWidth;
    log_bg.height = this.stage.stageHeight;
  }

  private  async loadResource() {
    try {
      const loadingView = new LoadingUI();
      this.stage.addChild(loadingView);
      await RES.loadConfig("resource/login.res.json", "resource/");
      await RES.loadGroup('login', 0, loadingView);
      this.stage.removeChild(loadingView);
    } catch (e) {
      console.error(e);
    }
}
