var ItemType ={
	Strick:1,
	Block:2,
	LeftClick:3
};

var DircetType ={
	UP:1,
	DOWN:2,
	LEFT:3,
	RIGHT:4
};

function GetCell(x, y){
	var len = arguments.length;
	var Cell = {
		x: "",
		y: ""
	};
	if (2 == len) {
		Cell.x = x;
		Cell.y = y;
	}
	return Cell;
};
var KeyCodes ={
	leftKey : 37,
	RightKey :39,
	UpKey : 38,
	DownKey :40
};

var ClientType = {
	PC:1,
	NotPC:2
};
