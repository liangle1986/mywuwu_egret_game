/**
 * 对牌型分类，并提供牌大小值的算法，和已经计算好的牌型最大值 
 */
class NNPlayerType {
	
	public static BOMB_NIU:number = 14; //炸弹牛
	public static FIVE_XIAONIU:number = 13; //五小牛
	public static JIN_NIU:number = 12; //金牛

	public static NIU10:number = 11; //牛牛
	public static NIU9:number = 10; //牛9
	public static NIU8:number = 9; //牛8
	public static NIU7:number = 8; //牛7
	public static NIU6:number = 7; //牛6
	public static NIU5:number = 6; //牛5
	public static NIU4:number = 5; //牛4
	public static NIU3:number = 4; //牛3
	public static NIU2:number = 3; //牛2
	public static NIU1:number = 2; //牛1
	public static NIU0:number = 1; //无牛

	public static ERROR:number = 0; //牌型错误

	private static POKER_TYPE_IMGS:Array<any> = ["niu0", "niu1", "niu2", "niu3", "niu4", "niu5", "niu6", "niu7", "niu8", "niu9", "niu10", "jinniu", "wuxiaoniu", "zdn"];
	private static POKER_TYPE_NAMES:Array<any> = ["没牛", "牛一", "牛二", "牛三", "牛四", "牛五", "牛六", "牛七", "牛八", "牛九", "牛牛", "金牛", "五小牛", "炸弹牛"];
	public static getPokerTypeStrBySererNum(value:number):string
	{
		return NNPlayerType.POKER_TYPE_IMGS[value];
	}

	public static getPokerTypeName(value:number):string
	{
		return NNPlayerType.POKER_TYPE_NAMES[value];
	}

	/**
	 * 获取牛牛牌类型
	 * @param cards 牌值数组  1，2，3，4，5
	 */
	public static getPokerType(cards:Array<any>):Object
	{
		var pokerObj:Object = {"cards":cards, "type":0, "power": 0};
		if(cards == null || cards.length != 5) return pokerObj;
		
		var maxValue:number = NNPlayerType.getMaxValue(cards);
		//判断是否为炸弹牛
		var sameCounts:Array<any> = NNPlayerType.getSameCount(cards);
		if(sameCounts.length == 1)
		{
			var sameCountObj:Object = sameCounts[0];
			if(sameCountObj["count"] == 4)
			{
				pokerObj["type"] = NNPlayerType.BOMB_NIU;
				pokerObj["power"] = sameCountObj["value"];
				return pokerObj;
			}

		}
		//判断是否为五小牛
		var sum:number = NNPlayerType.getSum(cards);
		if(cards.every(function(value:any, index:number, arr:any[]) { return value < 5}) && sum <=10)
		{
			pokerObj["type"] = NNPlayerType.FIVE_XIAONIU;
			pokerObj["power"] = maxValue;
			return pokerObj;
		}
		//判断是否为金牛（5张牌全为花）
		if(cards.every(function (value:any, index:number, arr:any[]) {return value > 10;}))
		{
			pokerObj["type"] = NNPlayerType.JIN_NIU;
			pokerObj["power"] = maxValue;
			return pokerObj;
		}
		
		//牛？
		var copyCards:Array<any> = NNPlayerType.makeBiggerToEqualTen(cards);
		var hasNiu:Boolean = false;
		var isNiuNiu:Boolean = false;
		for(var i:number = 0; i < 3; i++)
		{
			for(var j:number = i+1; j < 4; j++)
			{
				for(var k:number = j+1; k < 5; k++)
				{
					sum = NNPlayerType.getSum([copyCards[i], copyCards[j], copyCards[k]]);
					if(sum % 10 == 0)
					{
						hasNiu = true;
						copyCards.splice(i, 1);
						copyCards.splice(j, 1);
						copyCards.splice(k, 1);
						break;
					}
				}
			}
		}
		if(hasNiu)
		{
			sum = NNPlayerType.getSum(copyCards);
			var sumYu10:number = sum % 10;
			if(sumYu10 == 0)
			{
				pokerObj["type"] = NNPlayerType.NIU10;
				pokerObj["power"] = 10;
			}
			else
			{
				if(sumYu10 == 9)
					pokerObj["type"] = NNPlayerType.NIU9;
				else if(sumYu10 == 8)
					pokerObj["type"] = NNPlayerType.NIU8;
					
				pokerObj["power"] = sumYu10;
			}
		}
		
		return pokerObj;
	}

	private static makeBiggerToEqualTen(cards:Array<any>):Array<any>
	{
		var len:number = cards.length;
		var copyCards:Array<any> = cards.concat();
		for(var i:number = 0; i<len; i++)
		{
			copyCards[i] = copyCards[i] > 10?10:copyCards[i];
        }
		return copyCards;
	}

	/**
	 * 
	 */
	private static getMaxValue(cards:Array<any>):number
	{
		var maxValue:number = 0;
		var len:number = cards.length;
		for(var i:number = 0; i < len; i++)
		{
			var cardValue:number = cards[i];
			if(cardValue > maxValue)
				maxValue = cardValue;
		}
		return maxValue;
	}

	public static getSum(cards:Array<any>):number
	{
		var sum:number = 0;
		var len:number = cards.length;

		for(var i:number = 0;i < len; i++)
		{
			sum += cards[i];
		}
		return sum;
	}

	/**
	 * 获取相同值的牌
	 */
	public static getSameCount(cards:Array<any>):Array<any>
	{
		if(cards == null)
			throw new Error("param is null!!!");
		
		var copyCards:Array<any> = cards.concat();
		copyCards.sort();
		console.log("copyCards = "+copyCards);
		var sameCount:number = 1;
		var len:number = cards.length;
		var result:Array<any> = [];
		for(var i:number = 0; i < len;)
		{
			sameCount = 0;
			for(var j:number = i; j < len; j++)
			{
				if(copyCards[i] == copyCards[j])
					sameCount++;
			}
			result.push({"value":copyCards[i], "count":sameCount});
			i += sameCount;
		}

		return result;
	}
}