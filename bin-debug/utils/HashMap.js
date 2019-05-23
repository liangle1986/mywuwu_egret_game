var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HashMap = (function () {
    function HashMap() {
        this._dict = null;
        this._keyList = null;
        this._dict = {};
        this._keyList = [];
    }
    /**
    * 存入一个键值
    */
    HashMap.prototype.put = function (key, value) {
        if (key != null) {
            if (this._keyList.indexOf(key) == -1)
                this._keyList.push(key);
            this._dict[key] = value;
        }
        else {
            console.log("HashMap::Cannot put a value with undefined or null key!");
        }
    };
    /**
    * 移除一个键值
    */
    HashMap.prototype.remove = function (key) {
        var i = this._keyList.indexOf(key);
        if (this._dict[key])
            delete this._dict[key];
        return this._keyList.splice(i, 1);
    };
    /**
    * 清空
    */
    HashMap.prototype.clear = function () {
        this._keyList.length = 0;
        this._keyList = [];
        for (var key in this._dict)
            delete this._dict[key];
    };
    /**
    * 根据key获取一个值
    */
    HashMap.prototype.get = function (key) {
        return this._dict[key];
    };
    Object.defineProperty(HashMap.prototype, "keys", {
        get: function () {
            return this._keyList;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * 获取所有值
    */
    HashMap.prototype.values = function () {
        var len = this.keys.length;
        var results = [];
        for (var i = 0; i < len; i++) {
            results = results.concat(this.get(this.keys[i]));
        }
        return results;
    };
    HashMap.prototype.indexOf = function (value) {
        var i = 0;
        for (var key in this._dict) {
            if (this._dict[this._dict[key]] == value)
                return i;
            i++;
        }
        return -1;
    };
    HashMap.prototype.size = function () {
        return this._keyList.length;
    };
    HashMap.prototype.isEmpty = function () {
        return (this._keyList.length == 0);
    };
    HashMap.prototype.clone = function () {
        var hashMap = new HashMap();
        for (var key in this._keyList) {
            hashMap.keys.push(this._keyList[key]);
            hashMap.put(this._keyList[key], this._dict[this._keyList[key]]);
        }
        return hashMap;
    };
    HashMap.prototype.containsKey = function (key) {
        for (var k in this._keyList) {
            if (this._keyList[k] === key)
                return true;
        }
        return false;
    };
    HashMap.prototype.containsValue = function (value) {
        for (var v in this._dict) {
            if (this._dict[v] === value)
                return true;
        }
        return false;
    };
    /**
    * 转化成字符串形式 key->value
    */
    HashMap.prototype.toString = function () {
        var str = "HashMap Content:\n";
        for (var key in this._keyList)
            str += key + " -> " + this._dict[this._keyList[key]] + "\n";
        return str;
    };
    return HashMap;
}());
__reflect(HashMap.prototype, "HashMap");
//# sourceMappingURL=HashMap.js.map