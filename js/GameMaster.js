var timer;

document.onkeydown = keydown;
var touchMaster;
var bodyWidth = 15;
var bodyHeith = 19;
var AutoMoveTime = 0;
var UserMoveTime = 0;
var moveLeftFlg = false;
var moveRightFlg = false;
var moveDownFlg = false;
var changeDirectFlg = false;
var CurrentInputType = ClientType.PC;
var gameFact = {
	BoderCollect : new Array(bodyHeith*bodyWidth),
	CurrentItem : new Strick(DircetType.UP),
	NextItem : new Strick(DircetType.UP),
	GameStopFlg : true
};

var touchFact = {
	LeftMoveCnt: 0,
	RightMoveCnt: 0,
	DownMoveCnt: 0,
	ChangeMoveCnt: 0,
	addLeft: function(){
		//LeftMoveCnt = 0;
		RightMoveCnt = 0;
		DownMoveCnt = 0;
		ChangeMoveCnt = 0;
		if (LeftMoveCnt < 7) {
			LeftMoveCnt++;
		}
	},
	addRight: function(){
		LeftMoveCnt = 0;
		//RightMoveCnt = 0;
		DownMoveCnt = 0;
		ChangeMoveCnt = 0;
		if (LeftMoveCnt < 7) {
			RightMoveCnt++;
		}
	},
	addChange: function(){
		LeftMoveCnt = 0;
		RightMoveCnt = 0;
		DownMoveCnt = 0;
		//ChangeMoveCnt = 0;
		if (LeftMoveCnt < 7) {
			ChangeMoveCnt++;
		}
	},
	addDown: function(){
		LeftMoveCnt = 0;
		RightMoveCnt = 0;
		//DownMoveCnt = 0;
		ChangeMoveCnt = 0;
		if (LeftMoveCnt < 7) {
			DownMoveCnt++;
		}
	},
	removeLeft: function(){
		if (LeftMoveCnt > 0) {
			LeftMoveCnt--;
		}
	},
	removeRight: function(){
		if (LeftMoveCnt > 0) {
			RightMoveCnt--;
		}
	},
	removeChange: function(){
		if (LeftMoveCnt > 0) {
			ChangeMoveCnt--;
		}
	},
	removeDown: function(){
		if (LeftMoveCnt > 0) {
			DownMoveCnt--;
		}
	}
};
var CellsStr = "";

function IniGame(){
	
}

function ChangeInput(){
		if (CurrentInputType == ClientType.PC) {
			ChangeInputNotForPC();
			CurrentInputType = ClientType.NotPC;
		}
		else {
			ChangeInputForPC();
			CurrentInputType = ClientType.PC;
		}
}

function BodyIni(){
	if ( IsPC() == true){
		ChangeInputForPC();
	}
	else{
		ChangeInputNotForPC();
	}
}

function ChangeInputForPC(){
	var btnDiv = document.getElementById("btnDiv");
	var touchDiv = document.getElementById("touchDiv");
	touchDiv.className = "NotDisplay";
	btnDiv.className = "viewport";
}

function ChangeInputNotForPC(){
	var btnDiv = document.getElementById("btnDiv");
	var touchDiv = document.getElementById("touchDiv");
	btnDiv.className = "NotDisplay";
	touchDiv.className = "viewport";
}


function Run(){
	try{
		clearTimeout(timer);
		//touchMaster = null;
	}catch(ex){
		
	}
	timer = setInterval("GameProcess()", 1);
	touchMaster =  new LSwiperMaker({
            bind:document.getElementById("touchDiv"),  
            dire_h:true,     
            backfn:function(o){
            }
    });
	
};

function GetButtonPress(btnID){
	try {
		var btn = document.getElementById(btnID);
		if (btn.className.length > 3) {
		    alert(1);
			return true;
		}
		return false;
	}
	catch(ex){
		return false;
	}
}

function GameProcess(){
	try {
	
		if (UserMoveTime == 0) {
			if (touchFact.LeftMoveCnt > 0) {
				touchFact.removeLeft();
				moveLeftFlg = true;
			}
			if (touchFact.RightMoveCnt > 0) {
				touchFact.removeRight();
				moveRightFlg = true;
			}
			if (touchFact.DownMoveCnt > 0) {
				touchFact.removeDown();
				moveDownFlg = true;
			}
			if (touchFact.ChangeMoveCnt > 0) {
				touchFact.removeChange();
				changeDirectFlg = true;
			}
			
			if (moveLeftFlg == true && IsItemCanMove(gameFact.CurrentItem.GetNextLeft()) == true) {
				gameFact.CurrentItem.MoveLeft();
			}
			
			if (moveRightFlg == true && IsItemCanMove(gameFact.CurrentItem.GetNextRight()) == true) {
				gameFact.CurrentItem.MoveRight();
			}
			
			if (moveDownFlg == true) {
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
		
		AutoMoveTime = (AutoMoveTime + 1) % 100;
		UserMoveTime = (UserMoveTime + 1) % 20;
	} 
	catch (ex) {
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
	var newNextItem ;
	var index =getRandomInt(1,2);
	var direct =getRandomInt(1,4);
	if (index == 1) {
		newNextItem = new Strick(direct);
		AutoMoveTime = 1;
		UserMoveTime = 1;
	}else{
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


