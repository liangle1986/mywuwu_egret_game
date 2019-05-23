interface IGame 
{
	init(battleData:Object);
	dispose();
	getPlayerInfoById(playerId:string);
	getView();
}