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
	CurrentItem : new Strick(DircetType.UP),
	NextItem : new Strick(DircetType.UP),
	GameStopFlg : true
};
var CellsStr = "";
function IniGame(){
	
}

function Run(){
	try{
		clearTimeout(timer);
	}catch(ex){
		
	}
	timer = setInterval("GameProcess()", 1);
	
};

function GetButtonPress(btnID){
	var btn =document.getElementById(btnID);

	if (btn.isfoc == "disabled") {
	   alert(btn);
	}
}

function GameProcess(){
	try {
		GetButtonPress("btnLeft");
		if (UserMoveTime == 0) {
			if (moveLeftFlg == true && IsItemCanMove(gameFact.CurrentItem.GetNextLeft()) == true) {
				gameFact.CurrentItem.MoveLeft();
			}
			
			if (moveRightFlg == true && IsItemCanMove(gameFact.CurrentItem.GetNextRight()) == true) {
				gameFact.CurrentItem.MoveRight();
			}
			
			if (moveDownFlg == true){
				if (IsItemCanMove(gameFact.CurrentItem.GetNextDown()) == true) {
					gameFact.CurrentItem.MoveDown();
				}
				else {
					CheckNewItem();
				}
			}
			
			if (changeDirectFlg == true && IsItemCanMove(gameFact.CurrentItem.GetNextDrirect()) == true) {
				gameFact.CurrentItem.ChangeToNextDirect();
			}
			moveLeftFlg = false;
			changeDirectFlg = false;
			moveRightFlg = false;
			moveDownFlg = false;
		}
		
		if (AutoMoveTime == 0) {
			if (IsItemCanMove(gameFact.CurrentItem.GetNextDown()) == true) {
				gameFact.CurrentItem.MoveDown();
			}
			else {
				CheckNewItem();
			}
		}
		
		AutoMoveTime = (AutoMoveTime + 1) % 150;
		UserMoveTime = (UserMoveTime + 1) % 25;
	}
	catch(ex){
		clearTimeout(timer);
	}
	
}

function CheckClear(cellList){
	cellList.forEach(function(e){
		var clearRowFlg = true;
		for (var widthCnt = 1; widthCnt <= bodyWidth; widthCnt++) {
			if (GetTDItemByCL(widthCnt, e.y).style.backgroundColor != "yellow") {
				clearRowFlg = false;
				break;
			}
		}
		if (clearRowFlg == true) {
			ClearRow(e.y);
		}
	});
}
function ClearRow(rowNo){
	for (var widthCnt = 1; widthCnt <= bodyWidth; widthCnt++) {
		GetTDItemByCL(widthCnt, rowNo).style.backgroundColor = "white";
	}
	for (var heighCnt = rowNo; heighCnt >= 2; heighCnt--) {
		for (var widthCnt = 1; widthCnt <= bodyWidth; widthCnt++) {
			GetTDItemByCL(widthCnt, heighCnt).style.backgroundColor = GetTDItemByCL(widthCnt, heighCnt-1).style.backgroundColor;
		}
	}
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
function LeftBtn(){
	moveLeftFlg = true;
}
function RightBtn(){
	moveRightFlg = true;
}
function ChangeBtn(){
	changeDirectFlg = true;
}
function DownBtn(){
	moveDownFlg = true;
}

function CheckNewItem(){
	if (IsItemCanMove(gameFact.CurrentItem.GetNextDown()) == false) {
		CheckClear(gameFact.CurrentItem.GetCurrentCells());
		gameFact.CurrentItem = gameFact.NextItem;
		gameFact.NextItem = NewItem();
	}
}
function NewItem(){
	var newNextItem;
	var index =getRandomInt(1,1);
	var direct =getRandomInt(1,4);
	if (index == 1) {
		newNextItem = new Strick(direct);
		AutoMoveTime = 1;
		UserMoveTime = 1;
	}
	RefleshCellCollect();
	//alert(CellsStr);		
	return newNextItem;
}

function RefleshCellCollect(){
	CellsStr = "";
	for (var heighCnt = 1; heighCnt <= bodyHeith; heighCnt++) {
		for (var widthCnt = 1; widthCnt <= bodyWidth; widthCnt++) {
			if (GetTDItemByCL(widthCnt, heighCnt).style.backgroundColor == "yellow") {
				CellsStr = CellsStr + GetTDItemID(widthCnt, heighCnt) + ",";
			}
		}
	}
}

function IsItemCanMove(cellList){
    var ret = true;
	cellList.forEach(function(e){
		if(IsCellCrash(e) == true){
			ret= false;
			return;
		}
	});
	return ret;
}

function IsCellCrash(cell){
	
	var checkCellStr = GetTDItemID(cell);
	checkCellStr = checkCellStr +",";
	if(cell.y == 200){
		alert(checkCellStr);
		alert(CellsStr);
	}
	if (cell.x < 1 || cell.x > bodyWidth) {
		return true;
	}
	if (cell.y > bodyHeith) {
		return true;
	}
	if (CellsStr.indexOf(checkCellStr) >= 0) {
		//alert(checkCellStr);
		//alert(CellsStr);
		return true;
	}
	//alert(cell.x + ":" + cell.y);
	return false;
}


