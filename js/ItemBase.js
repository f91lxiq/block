
function ItemBase(itemDirect, itemType, itemCenterCell, itemNextItemCenterCell){
	this.itemDirect = itemDirect;
	this.itemType = itemType;
	this.itemCenterCell = itemCenterCell;
	this.itemNextItemCenterCell = itemNextItemCenterCell;
	this.itemsCollect = new Array(2);
	this.itemsCollect[1] = 1;
	//alert("1");
}

ItemBase.prototype.ClearItem = function(){
	
	if (this.itemDirect == DircetType.UP) {
		GetTDItemByCell(OffsetByCell(this.itemCenterCell,  0,-1)).style.backgroundColor = "white";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell,  0, 0)).style.backgroundColor = "white";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell,  0, 1)).style.backgroundColor = "white";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell,  0, 2)).style.backgroundColor = "white";
	}
	else{
		GetTDItemByCell(OffsetByCell(this.itemCenterCell, -1, 0)).style.backgroundColor = "white";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell, 0, 0)).style.backgroundColor = "white";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell, 1, 0)).style.backgroundColor = "white";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell, 2, 0)).style.backgroundColor = "white";
	}
};

ItemBase.prototype.DrawItem = function(){
	if (this.itemDirect == DircetType.UP) {
		GetTDItemByCell(OffsetByCell(this.itemCenterCell,  0,-1)).style.backgroundColor = "yellow";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell,  0, 0)).style.backgroundColor = "yellow";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell,  0, 1)).style.backgroundColor = "yellow";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell,  0, 2)).style.backgroundColor = "yellow";
	}
	else{
		GetTDItemByCell(OffsetByCell(this.itemCenterCell, -1, 0)).style.backgroundColor = "yellow";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell, 0, 0)).style.backgroundColor = "yellow";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell, 1, 0)).style.backgroundColor = "yellow";
		GetTDItemByCell(OffsetByCell(this.itemCenterCell, 2, 0)).style.backgroundColor = "yellow";
	}
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
	this.itemDirect = direct;
	this.DrawItem();
};

ItemBase.prototype.ChangeToNextDirect = function(){
	this.ClearItem();
	if (this.itemDirect == DircetType.UP){	
		this.itemDirect = DircetType.LEFT;
	} 
	else{
		this.itemDirect = DircetType.UP;
	}
	this.DrawItem();
};
Object.setPrototypeOf(Strick.prototype, ItemBase.prototype);
function Strick(itemDirect,  itemCenterCell, itemNextItemCenterCell){
	var item = new ItemBase(itemDirect, ItemType.Strick, GetCell(), GetCell());
	return item;
}
