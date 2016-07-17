function GetTDItemByCL(col, row){
	var itemID = "td"+ row + "_" + col;
	var webItem = document.getElementById(itemID);
	return webItem;
}

function GetTDItemByCell(cell){
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
