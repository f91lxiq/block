
function ItemBase(itemDirect, itemType, itemCenterCell, itemNextItemCenterCell){
	this.itemDirect = itemDirect;
	this.itemType = itemType;
	this.itemCenterCell = itemCenterCell;
	this.itemNextItemCenterCell = itemNextItemCenterCell;
	this.itemsCollect = new Array(2);
	this.itemsCollect[1] = 1;
}

ItemBase.prototype.ClearItem = function(){
	var cell = this.itemCenterCell;
	this.itemsCollect.forEach(function(e){
		GetTDItemByCell(OffsetByCell(cell, e.x, e.y)).style.backgroundColor = "white";
	});

};

ItemBase.prototype.DrawItem = function(){
    var cell = this.itemCenterCell;
	this.itemsCollect.forEach(function(e){
		GetTDItemByCell(OffsetByCell(cell, e.x, e.y)).style.backgroundColor = "yellow";
	});
};

ItemBase.prototype.MoveLeft = function(){
	this.ClearItem();
	this.itemCenterCell = OffsetByCell(this.itemCenterCell, -1, 0);
	this.DrawItem();
};

ItemBase.prototype.MoveRight = function(){
	this.ClearItem();
	this.itemCenterCell = OffsetByCell(this.itemCenterCell, 1, 0);
	this.DrawItem();
};

ItemBase.prototype.MoveDown = function(){
	this.ClearItem();
	this.itemCenterCell = OffsetByCell(this.itemCenterCell, 0, 1);
	this.DrawItem();
};

ItemBase.prototype.ChangeDirect = function(direct){
	this.ClearItem();
	this.ChangeDirectChild(direct);
	this.DrawItem();
};
ItemBase.prototype.ChangeToNextDirect = function(){
	this.ClearItem();
	this.ChangeToNextDirectChild();
	this.DrawItem();
};
ItemBase.prototype.ChangeDirectChild = function(direct){

};

ItemBase.prototype.ChangeToNextDirectChild = function(){
	
};
ItemBase.prototype.SetCells = function(){
    if(this.itemDirect == DircetType.UP){
		this.itemsCollect = this.CellUp();
	}else if(this.itemDirect == DircetType.RIGHT){
		this.itemsCollect = this.CellRight();
	}else if(this.itemDirect == DircetType.LEFT){
		this.itemsCollect = this.CellLeft();
	}else if(this.itemDirect == DircetType.DOWN){
		this.itemsCollect = this.CellDown();
	}
};
ItemBase.prototype.CellUp = function(){
	return new Array();
};
ItemBase.prototype.CellDown = function(){
	return new Array();
};
ItemBase.prototype.CellLeft = function(){
	return new Array();
};
ItemBase.prototype.CellRight = function(){
	return new Array();
};

Object.setPrototypeOf(Strick.prototype, ItemBase.prototype);

function Strick(itemDirect, itemCenterCell, itemNextItemCenterCell){
	var item = new ItemBase(itemDirect, ItemType.Strick, GetCell(), GetCell());
	item.itemsCollect = new Array(4);
	item.itemCenterCell = itemCenterCell;
	item.itemNextItemCenterCell = itemNextItemCenterCell;
	item.itemDirect = itemDirect;
   
	item.CellUp = function(){
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
			item.itemDirect = DircetType.LEFT;
		}
		else {
			item.itemDirect = DircetType.UP;
		}
		item.SetCells();
	};
	item.ChangeDirectChild = function(direct){
		if (item.itemDirect == DircetType.UP) {
			item.itemDirect = DircetType.UP;
		}
		else 
			if (item.itemDirect == DircetType.UP) {
				item.itemDirect = DircetType.LEFT;
			}
		item.SetCells();
	};
	return item;
}






