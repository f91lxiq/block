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
