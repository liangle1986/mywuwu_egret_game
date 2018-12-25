declare interface BitmapUtil {
  createBitmapByName(name: string): Promise<egret.Bitmap>;
  loadResource(this, config: string, group: string): void;
}

class BitUtil implements BitmapUtil {
  async createBitmapByName(name: string) {
    let result = new egret.Bitmap();
    let texture: egret.Texture = RES.getRes(name);
    result.texture = texture;
    return result;
  }
  async loadResource(this, config: string, group: string) {
    try {
      const loadingView = new LoadingUI();
      this.stage.addChild(loadingView);
      await RES.loadConfig("resource/" + config, "resource/");
      await RES.loadGroup(group, 0, loadingView);
      this.stage.removeChild(loadingView);
    } catch (e) {
      console.error(e);
    }
  }
}

if (!window.bitmap) {
  window.bitmap = new BitUtil();
}

declare let bitmap: BitmapUtil;

declare interface Window {
  bitmap: BitmapUtil;
}
