var timer;

document.onkeydown = keydown;

var bodyWidth = 15;
var bodyHeith = 19;
var AutoMoveTime = 0;
var UserMoveTime = 0;
var moveLeftFlg = false;
var moveRightFlg = false;
var moveDownFlg = false;
var changeDirectFlg = false;
var gameFact = {
	BoderCollect : new Array(bodyHeith*bodyWidth),
	CurrentItem : new Strick(DircetType.DOWN, GetCell() ,GetCell()),
	NextItem : new Strick(DircetType.DOWN, GetCell() ,GetCell()),
	GameStopFlg : true
};

function IniGame(){
	
}

function Run(){
    gameFact.CurrentItem.itemCenterCell.x = 5;
	gameFact.CurrentItem.itemCenterCell.y = 2;
	time = setInterval("GameProcess()", 1);
	
};

function GameProcess(){
	if (UserMoveTime == 0) {
		if (moveLeftFlg == true) {
			gameFact.CurrentItem.MoveLeft();
			moveLeftFlg = false;
		}
		
		if (moveRightFlg == true) {
			gameFact.CurrentItem.MoveRight();
			moveRightFlg = false;
		}
		
		if (moveDownFlg == true) {
			gameFact.CurrentItem.MoveDown();
			moveDownFlg = false;
		}
		
		if (changeDirectFlg == true) {
			gameFact.CurrentItem.ChangeToNextDirect();
			changeDirectFlg = false;
		}
	}
	
	if (AutoMoveTime == 0) {
		gameFact.CurrentItem.ClearItem();
		gameFact.CurrentItem.itemCenterCell = OffsetByCell(gameFact.CurrentItem.itemCenterCell, 0, 1);
		gameFact.CurrentItem.DrawItem();
	}
	
	AutoMoveTime = (AutoMoveTime + 1) % 150;
	UserMoveTime = (UserMoveTime + 1) % 25;
	
}

function keydown(){
	
	if(event.keyCode == KeyCodes.leftKey){
		moveLeftFlg = true;
	}
	
	if(event.keyCode == KeyCodes.RightKey){
		moveRightFlg = true;
	}
	
	if(event.keyCode == KeyCodes.UpKey){
		changeDirectFlg = true;
	}
	
	if(event.keyCode == KeyCodes.DownKey){
		moveDownFlg = true;
	}
}



