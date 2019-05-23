var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 辅助函数类
 */
var DUtils = (function () {
    function DUtils() {
    }
    /**
     *
     */
    DUtils.hitTestRect = function (rect, rect2) {
        return rect.y < rect2.bottom && rect.bottom > rect2.y
            && rect.x < rect2.right && rect.right > rect2.x;
    };
    /**
     * @param page 从1开始
     */
    DUtils.getArrayByPage = function (totalArr, page, pagesize) {
        if (pagesize === void 0) { pagesize = 5; }
        if (totalArr == null)
            return null;
        var startIndex = (page - 1) * pagesize;
        var endIndex = startIndex + pagesize;
        endIndex = Math.min(endIndex, totalArr.length);
        return totalArr.slice(startIndex, endIndex);
    };
    /**
     * 格式化数字，  如9125显示成9,125
     */
    DUtils.formatNumber = function (value) {
        var dataStr = value.toString();
        var dataArr = dataStr.split("");
        var dataTwoArr = new Array();
        var addArr = new Array();
        for (var i = (dataArr.length - 1); i >= 0; i--) {
            if (addArr.length < 3) {
                addArr.push(dataArr[i]);
                if (i == 0) {
                    dataTwoArr.push(addArr);
                }
            }
            else {
                dataTwoArr.push(addArr);
                addArr = [];
                addArr.push(dataArr[i]);
                if (i == 0) {
                    dataTwoArr.push(addArr);
                }
            }
        }
        var linkArr = new Array();
        for (var jb = 0; jb < dataTwoArr.length; jb++) {
            var setArr = dataTwoArr[jb];
            if (jb != (dataTwoArr.length - 1)) {
                var douHao = ",";
                setArr.push(douHao);
            }
            for (var j = 0; j < setArr.length; j++) {
                linkArr.push(setArr[j]);
            }
        }
        var getNewStr = "";
        for (var i = (linkArr.length - 1); i >= 0; i--) {
            getNewStr += linkArr[i];
        }
        return getNewStr;
    };
    /**
     * 创建一个按钮（可点击显示对象）
     * @param resNmae 资源名称，对应资源配置
     */
    DUtils.createSimpleButton = function (x, y, width, height, resName) {
        if (resName === void 0) { resName = ""; }
        var button = new egret.Sprite();
        if (resName != null) {
            //指定图片的，一般不需要手动设置宽高参数
            button.addChild(DUtils.createBitmapByName(resName));
        }
        else {
            button.graphics.beginFill(0x000, 0);
            button.graphics.drawRect(0, 0, width, height);
            button.graphics.endFill();
        }
        button.x = x;
        button.y = y;
        button.touchEnabled = true;
        return button;
    };
    /**
     * 创建一个文本框
     */
    DUtils.createTextField = function (x, y, width, height, size, text, isMulti, type) {
        if (text === void 0) { text = ""; }
        if (isMulti === void 0) { isMulti = false; }
        if (type === void 0) { type = egret.TextFieldType.INPUT; }
        var tf = new egret.TextField();
        tf.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        tf.textAlign = egret.HorizontalAlign.LEFT;
        tf.x = x;
        tf.y = y;
        tf.size = size;
        tf.multiline = isMulti;
        if (width != -1)
            tf.width = width;
        if (height != -1)
            tf.height = height;
        tf.text = text;
        return tf;
    };
    /**
    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
    */
    DUtils.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 创建一个影片对象 json文件和image文件保持一致
     */
    DUtils.createMovieClipByName = function (namse) {
        var spr1 = new egret.MovieClip();
        var data = RES.getRes(namse + "_json");
        var texture = RES.getRes(namse + "_png");
        var mcDataFactory = new egret.MovieClipDataFactory(data, texture);
        spr1 = new egret.MovieClip(mcDataFactory.generateMovieClipData(namse));
        return spr1;
    };
    /**
     * 获取雪碧图中的纹理
     */
    DUtils.createSpriteSheetByName = function (json, frames) {
        var result = new egret.Bitmap();
        var imgs = RES.getRes(json);
        result.texture = imgs.getTexture(frames);
        return result;
    };
    /**
     * 获取请求参数中的参数值
     */
    DUtils.getRequestParamByName = function (name) {
        var oRequest = new Object();
        oRequest = DUtils.getRequestParams();
        return oRequest[name];
    };
    /**
     * 获取请求参数
     */
    DUtils.getRequestParams = function () {
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
    };
    DUtils.randArray = function (array) {
        array.sort(function () { return 0.5 - Math.random(); });
    };
    DUtils.createRandomNum = function (min, max) {
        if (min === void 0) { min = 0; }
        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum;
    };
    /**
     * 是否为native模式
     */
    DUtils.isNative = function () {
        return egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE;
    };
    return DUtils;
}());
__reflect(DUtils.prototype, "DUtils");
//# sourceMappingURL=DUtils.js.map