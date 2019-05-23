/**
 * 辅助函数类
 */
class DUtils {
	/**
	 * 
	 */
	public static hitTestRect(rect: egret.Rectangle, rect2: egret.Rectangle): boolean {
		return rect.y < rect2.bottom && rect.bottom > rect2.y
			&& rect.x < rect2.right && rect.right > rect2.x;
	}
	/**
	 * @param page 从1开始
	 */
	public static getArrayByPage(totalArr: Array<any>, page: number, pagesize: number = 5): Array<any> {
		if (totalArr == null)
			return null;

		var startIndex: number = (page - 1) * pagesize;
		var endIndex: number = startIndex + pagesize;
		endIndex = Math.min(endIndex, totalArr.length);

		return totalArr.slice(startIndex, endIndex);
	}

	/**
	 * 格式化数字，  如9125显示成9,125
	 */
	public static formatNumber(value: number): string {
		var dataStr: string = value.toString();
		var dataArr: Array<any> = dataStr.split("");
		var dataTwoArr: Array<any> = new Array();
		var addArr: Array<any> = new Array();

		for (var i: number = (dataArr.length - 1); i >= 0; i--) {
			if (addArr.length < 3) {
				addArr.push(dataArr[i]);
				if (i == 0) {
					dataTwoArr.push(addArr);
				}

			}
			else {
				dataTwoArr.push(addArr)
				addArr = [];
				addArr.push(dataArr[i])
				if (i == 0) {
					dataTwoArr.push(addArr);
				}
			}
		}

		var linkArr: Array<any> = new Array();
		for (var jb: number = 0; jb < dataTwoArr.length; jb++) {
			var setArr: Array<any> = dataTwoArr[jb];
			if (jb != (dataTwoArr.length - 1)) {
				var douHao: String = ",";
				setArr.push(douHao);
			}
			for (var j: number = 0; j < setArr.length; j++) {
				linkArr.push(setArr[j]);
			}
		}

		var getNewStr: string = "";
		for (var i: number = (linkArr.length - 1); i >= 0; i--) {
			getNewStr += linkArr[i];
		}
		return getNewStr;
	}

	/**
	 * 创建一个按钮（可点击显示对象）
	 * @param resNmae 资源名称，对应资源配置
	 */
	static createSimpleButton(x: number, y: number, width: number, height: number, resName: string = ""): egret.Sprite {
		var button: egret.Sprite = new egret.Sprite();

		if (resName != null) {
			//指定图片的，一般不需要手动设置宽高参数
			button.addChild(DUtils.createBitmapByName(resName));
		}
		else {
			button.graphics.beginFill(0x000, 0);
			button.graphics.drawRect(0, 0, width, height);
			button.graphics.endFill();
		}
		button.x = x; button.y = y;
		button.touchEnabled = true;
		return button;

	}

	/**
	 * 创建一个文本框
	 */
	static createTextField(x: number, y: number, width: number, height: number, size: number, text: string = "", isMulti: boolean = false, type: egret.TextFieldType = egret.TextFieldType.INPUT): egret.TextField {
		var tf: egret.TextField = new egret.TextField();
		tf.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		tf.textAlign = egret.HorizontalAlign.LEFT;
		tf.x = x;
		tf.y = y;
		tf.size = size;

		tf.multiline = isMulti;
		if(width != -1)
			tf.width = width;
		if(height != -1)
			tf.height = height;
		tf.text = text;

		return tf;
	}

	/**
    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
    */
	static createBitmapByName(name: string): egret.Bitmap {
		var result: egret.Bitmap = new egret.Bitmap();
		var texture: egret.Texture = RES.getRes(name);
		result.texture = texture;
		return result;
	}
	/**
	 * 创建一个影片对象 json文件和image文件保持一致
	 */
	static createMovieClipByName(namse: string): egret.MovieClip {
		var spr1: egret.MovieClip = new egret.MovieClip();
		var data = RES.getRes(namse + "_json");
		var texture = RES.getRes(namse + "_png");
		var mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, texture);
		spr1 = new egret.MovieClip(mcDataFactory.generateMovieClipData(namse));
		return spr1;
	}
	/**
	 * 获取雪碧图中的纹理
	 */
	static createSpriteSheetByName(json: string, frames: string): egret.Bitmap {
		var result: egret.Bitmap = new egret.Bitmap();
		var imgs: egret.SpriteSheet = RES.getRes(json);
		result.texture = imgs.getTexture(frames);
		return result;
	}
	/**
	 * 获取请求参数中的参数值
	 */
	static getRequestParamByName(name: string) {
		var oRequest = new Object();
		oRequest = DUtils.getRequestParams();
		return oRequest[name];
	}
	/**
	 * 获取请求参数
	 */
	static getRequestParams(): any {

		var url = document.location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			var strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}

	public static randArray(array: Array<number>) {
		array.sort(function () { return 0.5 - Math.random() });
	}

	public static createRandomNum(min: number = 0,max:number){
        var randomNum: number = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum;
    }

	/**
	 * 是否为native模式
	 */
	public static isNative():boolean
	{
		return egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE;
	}
}