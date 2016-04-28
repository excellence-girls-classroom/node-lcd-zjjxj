function numberString(stringArray, grid, gridNum) {

    var allStr = "\n";
    var str = "";

    for (var j = 0; j < 3; j++) {
	
        allStr += buildEveryRow(stringArray, gridNum, j, grid) + "\n";
    }

    return allStr
}

function buildEveryRow(stringArray, gridNum, j, grid) {

    	var str ="";
    	stringArray.forEach(function(item){
	var num = parseInt(item),Arr = gridNum[num][j];
        var elem = grid[Arr];
        str += elem + " ";
    });

    return str;
	
}
exports.numberString=numberString;
