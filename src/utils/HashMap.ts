 class HashMap {

        private _dict: Object = null;
        private _keyList: Array<any> = null;

        public constructor() {
            this._dict = {};
            this._keyList = [];
        }
        /**
        * 存入一个键值
        */
        public put(key: any,value: any): void {
            if(key != null) {
                if(this._keyList.indexOf(key) == -1)
                    this._keyList.push(key);
                this._dict[key] = value;
            }
            else {
                console.log("HashMap::Cannot put a value with undefined or null key!");
            }
        }
        /**
        * 移除一个键值
        */
        public remove(key: any): any {
            var i: number = this._keyList.indexOf(key);
            if(this._dict[key])
                delete this._dict[key];
            return this._keyList.splice(i,1);
        }
        /**
        * 清空
        */
        public clear(): void {
            this._keyList.length = 0;
            this._keyList = [];
            for(var key in this._dict)
                delete this._dict[key];
        }
        /**
        * 根据key获取一个值
        */
        public get(key: any): any {
            return this._dict[key];
        }

        public get keys(): Array<any> {
            return this._keyList;
        }

        /**
        * 获取所有值
        */
        public values(): Array<any> {
            var len: number = this.keys.length;
            var results: Array<any> = [];
            for(var i: number = 0;i < len;i++) {
                results = results.concat(this.get(this.keys[i]));
            }
            return results;
        }

        public indexOf(value: any): number {
            var i: number = 0;
            for(var key in this._dict) {
                if(this._dict[this._dict[key]] == value)
                    return i;
                i++;
            }
            return -1;
        }

        public size(): number {
            return this._keyList.length;
        }

        public isEmpty(): Boolean {
            return (this._keyList.length == 0);
        }

        public clone(): HashMap {
            var hashMap: HashMap = new HashMap();
            for(var key in this._keyList) {
                hashMap.keys.push(this._keyList[key]);
                hashMap.put(this._keyList[key],this._dict[this._keyList[key]]);
            }
            return hashMap;
        }

        public containsKey(key: any): boolean {
            for(var k in this._keyList) {
                if(this._keyList[k] === key)
                    return true;
            }
            return false;
        }

        public containsValue(value: any): Boolean {
            for(var v in this._dict) {
                if(this._dict[v] === value)
                    return true;
            }
            return false;
        }
        /**
        * 转化成字符串形式 key->value
        */
        public toString(): string {
            var str: string = "HashMap Content:\n";
            for(var key in this._keyList)
                str += key + " -> " + this._dict[this._keyList[key]] + "\n";
            return str;
        }
}