
function ItemBase(itemDirect, itemType, itemCenterCell, itemNextItemCenterCell){
	this.itemDirect = itemDirect;
	this.itemType = itemType;
	this.itemCenterCell = itemCenterCell;
	this.itemNextItemCenterCell = itemNextItemCenterCell;
	this.itemsCollect = new Array(2);
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
	if (this.itemDirect == DircetType.UP) {
		this.itemsCollect = this.CellUp();
	}
	if (this.itemDirect == DircetType.RIGHT) {
		this.itemsCollect = this.CellRight();
	}
	if (this.itemDirect == DircetType.LEFT) {
		this.itemsCollect = this.CellLeft();
	}
	if (this.itemDirect == DircetType.DOWN) {
		this.itemsCollect = this.CellDown();
	}
};
ItemBase.prototype.GetCurrentCells = function(){
	var nextCells= new Array(this.itemCenterCell.length);
	var cnt= 0;
    var cell =this.itemCenterCell;
	this.itemsCollect.forEach(function(e){
		nextCells[cnt]=(OffsetByCell(cell, e.x, e.y));
		cnt++;
	});
	return nextCells;
};
ItemBase.prototype.GetNextCells = function(x, y){
	var nextCells= new Array(this.itemCenterCell.length);
	var cnt= 0;
    var cell = OffsetByCell(this.itemCenterCell,x,y);
	this.itemsCollect.forEach(function(e){
		nextCells[cnt]=(OffsetByCell(cell, e.x, e.y));
		cnt++;
	});
	return nextCells;
};
ItemBase.prototype.GetNextLeft = function(){
	return this.GetNextCells(-1,0);
};
ItemBase.prototype.GetNextRight = function(){
	return this.GetNextCells(1,0);
};
ItemBase.prototype.GetNextDown = function(){
	return this.GetNextCells(0,1);
};
ItemBase.prototype.GetNextDrirect = function(){
	var Cells= new Array(this.itemCenterCell.length);
	var nextCells= new Array(this.itemCenterCell.length);
	if (this.itemDirect == DircetType.UP) {
		Cells = this.CellRight();
	}
	if (this.itemDirect == DircetType.RIGHT) {
		Cells = this.CellDown();
	}
	if (this.itemDirect == DircetType.DOWN) {
		Cells = this.CellLeft();
		
	}
	if (this.itemDirect == DircetType.LEFT) {
		Cells = this.CellUp();
	}

	var cnt = 0;
	var cell = this.itemCenterCell;
 
	Cells.forEach(function(e){
		nextCells[cnt] = (OffsetByCell(cell, e.x, e.y));
		cnt++;
	});
	return nextCells;
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







