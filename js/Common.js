function GetTDItemByCL(col, row){
	var itemID = GetTDItemID(col, row);
	var webItem = document.getElementById(itemID);
	return webItem;
}

function GetTDItemID(col, row){
	var len = arguments.length;
	var itemID;
	if (len == 1) {
		itemID = "td" + col.y + "_" + col.x;
	}
	if (len == 2) {
		itemID = "td" + row + "_" + col;
	}
	return itemID;
}

function GetTDItemByCell(cell){
	//alert(cell.x +":"+cell.y);
	return GetTDItemByCL(cell.x, cell.y);
}

function OffsetByCL(col, row, x, y){
	var newCell = GetCell();
	newCell.x = Number(col) + Number(x);
	newCell.y = Number(row) + Number(y);
	return newCell;
}

function OffsetByCell(cell, x, y){
	return OffsetByCL(Number(cell.x), Number(cell.y), Number(x), Number(y));
}

function getRandomInt(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}