function makeNoMineField(tableId,class1, class2){
    var table = document.getElementById(tableId);
    var tds = table.getElementsByTagName("td");
    for(var k = 0; k < tds.length; k++){
        tds[k].className = class1;
    }
    for(var m = 0; m < tds.length; m++){
        tds[m].onclick = function(){
            this.className = class2;
        }
    }
}

function makeMineField(tableId,class1, class2){
    var table = document.getElementById(tableId);
    var tds = table.getElementsByTagName("td");
    for(var k = 0; k < tds.length; k++){
        tds[k].className = class1;
    }
    for(var m = 0; m < tds.length; m++){
        tds[m].onclick = function(){
            this.className = class2;
        }
    }

    var tr = table.children;
    var mineFieldLen = tr.length;
    var td = tr[0].children;
    var mineLineLen = td.length;
    function makeMatrix(a,b){
        var line = [];
        for(var i = 0; i < b; i++){
            line.push(false);
        }
        var matrix = [];
        for(var j = 0; j < a; j++){
            matrix.push(line);
        }
        
        return matrix;
    }
    var mineMatrix = makeMatrix(mineFieldLen,mineLineLen);
    console.log(mineMatrix);
}

function minesweeper(matrix) {
    //给雷区加上边界
	function toExpand(arr){
		var line = [];
		var newArr = [];
		for(var i = 0; i < arr[0].length + 2; i++){
			line.push(false);
		}
		newArr.push(line);
		for(var j = 0; j < arr.length; j++){
			arr[j].unshift(false);
			arr[j].push(false);
			newArr.push(arr[j]);
		}
		newArr.push(line);
		return newArr;
	}
    //给每一个方格计算数字
    function toBlur(arr){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr[i].length; j++){
            	if(arr[i][j] && !(i ==1 && j == 1)){//9宫格正中间的不参与计算，第二个的index是1不是222！！！
			sum++;
            	}
            }
        }
        return sum;
    }
    var expanded = toExpand(matrix);//加了边界的雷区
    var newMatrix = [];//用来存放标记了数字的雷区
    for(var i = 0; i < expanded.length - 2; i++){
        var newLine = [];
        for(var j = 0; j < expanded[i].length - 2; j++){
            var line = [];
            line.push(expanded[i].slice(j,j + 3));//从第j个到第j+3前面的那个: j, j+1, j+2
            line.push(expanded[i + 1].slice(j,j + 3));
            line.push(expanded[i + 2].slice(j,j + 3));
            console.log(line);
            newLine.push(toBlur(line));
        }
        newMatrix.push(newLine);
    }
    return newMatrix;
}
