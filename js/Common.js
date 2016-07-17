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
	newCell.x = col + x;
	newCell.y = row + y;
	return newCell;
}

function OffsetByCell(cell, x, y){
	return OffsetByCL(cell.x, cell.y, x, y);
}
