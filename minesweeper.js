function makeNoMineField(tableId,class1, class2){
    var table = document.getElementById(tableId);
    var tds = table.getElementsByTagName("td");
    for(var k = 0; k < tds.length; k++){
        tds[k].className = class1;
    }
    for(var m = 0; m < tds.length; m++){
    	tds[m].innerHTML = "";
        tds[m].onclick = function(){
            this.className = class2;
        }
    }
    console.log("no mines here");
}

function makeMineField(tableId,class1, class2){
    var table = document.getElementById(tableId);
    var tds = table.getElementsByTagName("td");

    var tbody = table.children;
    var tr = tbody[0].children;
    var mineFieldLen = tr.length;
    var td = tr[0].children;
    var mineLineLen = td.length;
    function makeMatrix(a,b){
    	console.log("a = " + a + ", b = " + b)
        var matrix = [];
        for(var j = 0; j < a; j++){
        	var line = [];
	        for(var i = 0; i < b; i++){
	        	var obj = {"mine":false,"num":-1};
	            line.push(obj);
	        }
            matrix.push(line);
        }

        var nthMine = [];
        var tempObj = {};
        var index = -1;
        function toGenerateNth(){
        	if(nthMine.length < 15){
        		index = parseInt(Math.random() * (a * b - 1),10);
        		if(!tempObj[index]){
        			tempObj[index] = true;
        			console.log(Math.floor(index / b) + ", " + (index % b));
        			nthMine.push(index);
        			toGenerateNth();
        		}else{
        			toGenerateNth();
        		}

        	}
        }
        toGenerateNth();
        for(var n = 0; n < nthMine.length; n++){
        	matrix[Math.floor(nthMine[n]/b)][nthMine[n] % b].mine = true;
        }
        return matrix;
    }
    var mineMatrix = makeMatrix(mineFieldLen,mineLineLen);
    var numberedMatrix = minesweeper(mineMatrix);
    console.log(numberedMatrix);
    for(var k = 0; k < tds.length; k++){
        tds[k].className = class1;
        tds[k].innerHTML = "";
        tds[k].onclick = function(){
        	if(numberedMatrix[this.parentNode.rowIndex][this.cellIndex].mine == true){
        		for(var mm = 0; mm < tds.length; mm++){
        			if(numberedMatrix[Math.floor(mm / mineLineLen)][mm % mineLineLen].mine){
        				tds[mm].className = class2;
        				tds[mm].innerHTML = "<div class='mineNumber'>&times;</div>";
        			}
        		}
        		for(var nn = 0; nn < tds.length; nn++){
        			tds[nn].onclick = function(){};
        		}
        	}else{
        		this.className = class2;
	            var innerNum = numberedMatrix[this.parentNode.rowIndex][this.cellIndex].num;
	            switch(innerNum){
	            	case 0:
	            	break;
	            	case 1:
	            	this.innerHTML = "<div class='mineNumber' style='color: blue;'>1</div>";
	            	break;
	            	case 2:
	            	this.innerHTML = "<div class='mineNumber' style='color: green;'>2</div>";
	            	break;
	            	case 3:
	            	this.innerHTML = "<div class='mineNumber' style='color: red;'>3</div>";
	            	break;
	            	case 4:
	            	this.innerHTML = "<div class='mineNumber' style='color: darkblue;'>4</div>";
	            	break;
	            	case 5:
	            	this.innerHTML = "<div class='mineNumber' style='color: darkred;'>5</div>";
	            	break;
	            	case 6:
	            	this.innerHTML = "<div class='mineNumber' style='color: lightblue;'>6</div>";
	            	break;
	            	case 7:
	            	this.innerHTML = "<div class='mineNumber' style='color: black;'>7</div>";
	            	break;
	            	case 8:
	            	this.innerHTML = "<div class='mineNumber' style='color: rgb(128, 128, 128);'>8</div>";
	            	break;
	            }
                var tableNow = document.getElementById(tableId);
                var tdUntouched = tableNow.getElementsByClassName("untouched");
                if(tdUntouched.length == 15){
                    for(var x = 0; x < tds.length; x++){
                        if(numberedMatrix[Math.floor(x / mineLineLen)][x % mineLineLen].mine){
                            tds[x].innerHTML = "<div class='mineNumber' style='color: green;'>&radic;</div>";
                        }
                    }
                    for(var y = 0; y < tds.length; y++){
                        tds[y].onclick = function(){};
                    }
                }
        	}
        }
    }
}

function minesweeper(matrix) {
    //给雷区加上边界
	function toExpand(arr){
		var line = [];
		var newArr = [];
		var obj = {"mine":false,"num":-1};
		for(var i = 0; i < arr[0].length + 2; i++){
			line.push(obj);
		}
		newArr.push(line);
		for(var j = 0; j < arr.length; j++){
			arr[j].unshift(obj);
			arr[j].push(obj);
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
            	if(arr[i][j].mine && !(i ==1 && j == 1)){//9宫格正中间的不参与计算，第二个的index是1不是222！！！
			sum++;
            	}
            }
        }
        arr[1][1].num = sum;
        return arr[1][1];
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
            newLine.push(toBlur(line));
        }
        newMatrix.push(newLine);
    }
    return newMatrix;
}
