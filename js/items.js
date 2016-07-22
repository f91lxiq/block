Object.setPrototypeOf(Strick.prototype, ItemBase.prototype);
function Strick(itemDirect){
	var item = new ItemBase(itemDirect, ItemType.Strick, GetCell(5,2), GetCell(5,2));
	item.itemDirect = itemDirect;
	item.CellUp = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(0, 1);
		cells[3] = GetCell(0, 2);
		return cells;
	};
	item.CellRight = function(){
		var cells = new Array(4);
		cells[0] = GetCell(-1, 0);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(1, 0);
		cells[3] = GetCell(2, 0);
		return cells;
	};
	item.CellDown = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(0, 1);
		cells[3] = GetCell(0, 2);
		return cells;
	};
	item.CellLeft = function(){
		var cells = new Array(4);
		cells[0] = GetCell(-1, 0);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(1, 0);
		cells[3] = GetCell(2, 0);
		return cells;
	};
	
	item.SetCells();
	
	item.ChangeToNextDirectChild = function(){
		if (item.itemDirect == DircetType.UP) {
			item.itemDirect = DircetType.RIGHT;
		}else
		if (item.itemDirect == DircetType.RIGHT) {
			item.itemDirect = DircetType.DOWN;
		}else
		if (item.itemDirect == DircetType.DOWN) {
			item.itemDirect = DircetType.LEFT;
		}else
		if (item.itemDirect == DircetType.LEFT) {
			item.itemDirect = DircetType.UP;
		}
		item.SetCells();
	};
	item.ChangeDirectChild = function(direct){
		item.itemDirect = direct;
		item.SetCells();
	};
	return item;
}



Object.setPrototypeOf(Block.prototype, ItemBase.prototype);
function Block(itemDirect){
	var item = new ItemBase(itemDirect, ItemType.Block, GetCell(5,2), GetCell(5,2));
	item.itemDirect = itemDirect;
	item.CellUp = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, 0);
		cells[1] = GetCell(0, 1);
		cells[2] = GetCell(1, 0);
		cells[3] = GetCell(1, 1);
		return cells;
	};
	item.CellRight = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, 0);
		cells[1] = GetCell(0, 1);
		cells[2] = GetCell(1, 0);
		cells[3] = GetCell(1, 1);
		return cells;
	};
	item.CellDown = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, 0);
		cells[1] = GetCell(0, 1);
		cells[2] = GetCell(1, 0);
		cells[3] = GetCell(1, 1);
		return cells;
	};
	item.CellLeft = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, 0);
		cells[1] = GetCell(0, 1);
		cells[2] = GetCell(1, 0);
		cells[3] = GetCell(1, 1);
		return cells;
	};
	
	item.SetCells();
	
	item.ChangeToNextDirectChild = function(){
		if (item.itemDirect == DircetType.UP) {
			item.itemDirect = DircetType.RIGHT;
		}else
		if (item.itemDirect == DircetType.RIGHT) {
			item.itemDirect = DircetType.DOWN;
		}else
		if (item.itemDirect == DircetType.DOWN) {
			item.itemDirect = DircetType.LEFT;
		}else
		if (item.itemDirect == DircetType.LEFT) {
			item.itemDirect = DircetType.UP;
		}
		item.SetCells();
	};
	item.ChangeDirectChild = function(direct){
		item.itemDirect = direct;
		item.SetCells();
	};
	return item;
}



Object.setPrototypeOf(RightClick.prototype, ItemBase.prototype);
function RightClick(itemDirect){
	var item = new ItemBase(itemDirect, ItemType.RightClick, GetCell(5,2), GetCell(5,2));
	item.itemDirect = itemDirect;
	item.CellUp = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(1, 0);
		cells[3] = GetCell(1, 1);
		return cells;
	};
	item.CellRight = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(1, -1);
		cells[2] = GetCell(-1, 0);
		cells[3] = GetCell(0, 0);
		return cells;
	};
	item.CellDown = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(1, 0);
		cells[3] = GetCell(1, 1);
		return cells;
	};
	item.CellLeft = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(1, -1);
		cells[2] = GetCell(-1, 0);
		cells[3] = GetCell(0, 0);
		return cells;
	};
	
	item.SetCells();
	
	item.ChangeToNextDirectChild = function(){
		if (item.itemDirect == DircetType.UP) {
			item.itemDirect = DircetType.RIGHT;
		}else
		if (item.itemDirect == DircetType.RIGHT) {
			item.itemDirect = DircetType.DOWN;
		}else
		if (item.itemDirect == DircetType.DOWN) {
			item.itemDirect = DircetType.LEFT;
		}else
		if (item.itemDirect == DircetType.LEFT) {
			item.itemDirect = DircetType.UP;
		}
		item.SetCells();
	};
	item.ChangeDirectChild = function(direct){
		item.itemDirect = direct;
		item.SetCells();
	};
	return item;
}


Object.setPrototypeOf(LeftClick.prototype, ItemBase.prototype);
function LeftClick(itemDirect){
	var item = new ItemBase(itemDirect, ItemType.LeftClick, GetCell(5,2), GetCell(5,2));
	item.itemDirect = itemDirect;
	item.CellUp = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(-1, 0);
		cells[3] = GetCell(-1, 1);
		return cells;
	};
	item.CellRight = function(){
		var cells = new Array(4);
		cells[0] = GetCell(-1, -1);
		cells[1] = GetCell(0, -1);
		cells[2] = GetCell(0, 0);
		cells[3] = GetCell(1, 0);
		return cells;
	};
	item.CellDown = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(-1, 0);
		cells[3] = GetCell(-1, 1);
		return cells;
	};
	item.CellLeft = function(){
		var cells = new Array(4);
		cells[0] = GetCell(-1, -1);
		cells[1] = GetCell(0, -1);
		cells[2] = GetCell(0, 0);
		cells[3] = GetCell(1, 0);
		return cells;
	};
	
	item.SetCells();
	
	item.ChangeToNextDirectChild = function(){
		if (item.itemDirect == DircetType.UP) {
			item.itemDirect = DircetType.RIGHT;
		}else
		if (item.itemDirect == DircetType.RIGHT) {
			item.itemDirect = DircetType.DOWN;
		}else
		if (item.itemDirect == DircetType.DOWN) {
			item.itemDirect = DircetType.LEFT;
		}else
		if (item.itemDirect == DircetType.LEFT) {
			item.itemDirect = DircetType.UP;
		}
		item.SetCells();
	};
	item.ChangeDirectChild = function(direct){
		item.itemDirect = direct;
		item.SetCells();
	};
	return item;
}

Object.setPrototypeOf(LeftStrick.prototype, ItemBase.prototype);
function LeftStrick(itemDirect){
	var item = new ItemBase(itemDirect, ItemType.LeftStrick, GetCell(5,3), GetCell(5,3));
	item.itemDirect = itemDirect;
	item.CellUp = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -2);
		cells[1] = GetCell(0, -1);
		cells[2] = GetCell(0, 0);
		cells[3] = GetCell(-1, 0);
		return cells;
	};
	item.CellRight = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(1, 0);
		cells[3] = GetCell(2, 0);
		return cells;
	};
	item.CellDown = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, 0);
		cells[1] = GetCell(1, 0);
		cells[2] = GetCell(0, 1);
		cells[3] = GetCell(0, 2);
		return cells;
	};
	item.CellLeft = function(){
		var cells = new Array(4);
		cells[0] = GetCell(-2, 0);
		cells[1] = GetCell(-1, 0);
		cells[2] = GetCell(0, 0);
		cells[3] = GetCell(0, 1);
		return cells;
	};
	
	item.SetCells();
	
	item.ChangeToNextDirectChild = function(){
		if (item.itemDirect == DircetType.UP) {
			item.itemDirect = DircetType.RIGHT;
		}else
		if (item.itemDirect == DircetType.RIGHT) {
			item.itemDirect = DircetType.DOWN;
		}else
		if (item.itemDirect == DircetType.DOWN) {
			item.itemDirect = DircetType.LEFT;
		}else
		if (item.itemDirect == DircetType.LEFT) {
			item.itemDirect = DircetType.UP;
		}
		item.SetCells();
	};
	item.ChangeDirectChild = function(direct){
		item.itemDirect = direct;
		item.SetCells();
	};
	return item;
}

Object.setPrototypeOf(RightStrick.prototype, ItemBase.prototype);
function RightStrick(itemDirect){
	var item = new ItemBase(itemDirect, ItemType.RightStrick, GetCell(5,3), GetCell(5,3));
	item.itemDirect = itemDirect;
	item.CellUp = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -2);
		cells[1] = GetCell(0, -1);
		cells[2] = GetCell(0, 0);
		cells[3] = GetCell(1, 0);
		return cells;
	};
	item.CellRight = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, 0);
		cells[1] = GetCell(1, 0);
		cells[2] = GetCell(2, 0);
		cells[3] = GetCell(0, 1);
		return cells;
	};
	item.CellDown = function(){
		var cells = new Array(4);
		cells[0] = GetCell(-1, 0);
		cells[1] = GetCell(0, 0);
		cells[2] = GetCell(0, 1);
		cells[3] = GetCell(0, 2);
		return cells;
	};
	item.CellLeft = function(){
		var cells = new Array(4);
		cells[0] = GetCell(0, -1);
		cells[1] = GetCell(-2, 0);
		cells[2] = GetCell(-1, 0);
		cells[3] = GetCell(0, 0);
		return cells;
	};
	
	item.SetCells();
	
	item.ChangeToNextDirectChild = function(){
		if (item.itemDirect == DircetType.UP) {
			item.itemDirect = DircetType.RIGHT;
		}else
		if (item.itemDirect == DircetType.RIGHT) {
			item.itemDirect = DircetType.DOWN;
		}else
		if (item.itemDirect == DircetType.DOWN) {
			item.itemDirect = DircetType.LEFT;
		}else
		if (item.itemDirect == DircetType.LEFT) {
			item.itemDirect = DircetType.UP;
		}
		item.SetCells();
	};
	item.ChangeDirectChild = function(direct){
		item.itemDirect = direct;
		item.SetCells();
	};
	return item;
}