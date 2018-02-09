function makeNoMineField(tableId,class1, class2){
    var table = document.getElementById(tableId);
    table.oncontextmenu = function(e){
	　　return false;
	}
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
    var theFlag = document.getElementById("newFlag");
    theFlag.onclick = function(){};
    console.log("no mines here");
}

function makeMineField(tableId,class1, class2, mineNumClass){
    var table = document.getElementById(tableId);
    table.oncontextmenu = function(e){
	　　return false;
	}
    var tds = table.getElementsByTagName("td");
    var tbody = table.children;
    var tr = tbody[0].children;
    var mineFieldLen = tr.length;
    var td = tr[0].children;
    var mineLineLen = td.length;
    var mineMatrix = makeMatrix(mineFieldLen,mineLineLen);
    var numberedMatrix = minesweeper(mineMatrix);
    console.log(numberedMatrix);
    var theFlag = document.getElementById("newFlag");
    theFlag.onclick = function(){
        console.log("theFlag.className = " + theFlag.className);
        if(theFlag.className == class1){
            theFlag.className = class2;
        }else{
            theFlag.className = class1;
        }
    };

    for(var k = 0; k < tds.length; k++){
    	var mineCountDown = document.getElementById("counter");
    	mineCountDown.innerHTML = "15";
    	var mineCountDownContent = Number(mineCountDown.innerHTML);
        tds[k].className = class1;
        tds[k].innerHTML = "";
        theFlag.className = class1;
        
        function toAddFlag(){//插小旗，计数减一，此时左击无效，再右击则取消小旗，计数加一
        	if(this.innerHTML){
        		if(this.innerHTML.match(/^<div/gm)){
        			this.innerHTML = "";
	        		mineCountDown.innerHTML = ++mineCountDownContent;
        		}
        	}else{
        		if(this.className == class1){
        			this.innerHTML = '<div class="flag"></div><div class="pole"></div><div class="stand"></div>';
		        	mineCountDown.innerHTML = --mineCountDownContent;
        		}
        	}
        }

        tds[k].oncontextmenu = toAddFlag;//右击插小旗或者取消小旗

        //以下是按住并拖放至雷区的代码
        // tds[k].addEventListener("dragover",function(e){
        // 	e.preventDefault();
        // },false);
        // tds[k].addEventListener("drop",toAddFlag,true);
        function toSwitchInnerNum(theTr,theTd,theNum){
            var item = tds[theTr * mineLineLen + theTd];
            item.onclick = function(){};
            switch(theNum){
                case 1:
                item.innerHTML = "<span class='" + mineNumClass + "' style='color: blue;'>1</span>";
                break;
                case 2:
                item.innerHTML = "<span class='" + mineNumClass + "' style='color: green;'>2</span>";
                break;
                case 3:
                item.innerHTML = "<span class='" + mineNumClass + "' style='color: red;'>3</span>";
                break;
                case 4:
                item.innerHTML = "<span class='" + mineNumClass + "' style='color: darkblue;'>4</span>";
                break;
                case 5:
                item.innerHTML = "<span class='" + mineNumClass + "' style='color: darkred;'>5</span>";
                break;
                case 6:
                item.innerHTML = "<span class='" + mineNumClass + "' style='color: lightblue;'>6</span>";
                break;
                case 7:
                item.innerHTML = "<span class='" + mineNumClass + "' style='color: black;'>7</span>";
                break;
                case 8:
                item.innerHTML = "<span class='" + mineNumClass + "' style='color: rgb(128, 128, 128);'>8</span>";
                break;
            }
        }

        tds[k].onclick = function(){
        	if(theFlag.className != class2){//不在标记地雷的状态下
        		if(!this.innerHTML){//排除未被翻开但已被标记的、已被翻开且有数字的
	        		if(numberedMatrix[this.parentNode.rowIndex][this.cellIndex].mine == true){//如果有雷
		        		for(var mm = 0; mm < tds.length; mm++){
                            tds[mm].onclick = function(){};//游戏结束，所有方块的单击事件都被取消
		        			if(numberedMatrix[Math.floor(mm / mineLineLen)][mm % mineLineLen].mine){//遍历所有有雷的方块
		        				tds[mm].className = class2;//翻开
		        				tds[mm].innerHTML = "<span class='" + mineNumClass + "'>☀</span>";//指明这里有雷
		        			}
		        		}
		        	}else{//如果无雷
		        		this.className = class2;//翻开
		        		var row = this.parentNode.rowIndex;
		        		var cell = this.cellIndex;
			            var innerNum = numberedMatrix[row][cell].num;
                        if(innerNum == 0){//周围8个方块都无雷
                            // console.log("innerNum = " + innerNum);
                            // toClear8td(row,cell);
                        }else{//周围有雷
                            toSwitchInnerNum(row,cell,innerNum);
                        }
		                var tableNow = document.getElementById(tableId);
		                var tdUntouched = tableNow.getElementsByClassName(class1);//检查当前没被翻开的方块数
		                if(tdUntouched.length == 15){//如果没被翻开的正好等于所有地雷数
		                    for(var x = 0; x < tds.length; x++){
                                tds[x].onclick = function(){};//游戏结束，取消所有单击事件
		                        if(numberedMatrix[Math.floor(x / mineLineLen)][x % mineLineLen].mine){
		                            tds[x].innerHTML = '<div class="flag"></div><div class="pole"></div><div class="stand"></div>';//标小旗
                                    mineCountDown.innerHTML = "0";//地雷计数归零

		                        }
		                    }
		                }
		        	}
	        	}
        	}else{//在标记地雷的状态下
        		if(this.className != class2){//如果被点击的方块已被标记
        			console.log("theFlag.className = " + theFlag.className);
        			console.log("this.className = " + this.className);
        			if(this.innerHTML){
		        		if(this.innerHTML.match(/^<div/gm)){
		        			this.innerHTML = "";
			        		mineCountDown.innerHTML = ++mineCountDownContent;
		        		}
		        	}else{//如果被点击的方块还没被标记
		        		if(this.className == class1){//如果没被标记的方块是还没被点击的（为了区分已经被点出来的数字方块）
		        			this.innerHTML = '<div class="flag"></div><div class="pole"></div><div class="stand"></div>';
				        	mineCountDown.innerHTML = --mineCountDownContent;
		        		}
		        	}
        		}
        	}
        }
    }
}

function makeMatrix(a,b){//a是row，b是col
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
    var nthMine = toGetRandomNum(0,a * b - 1,15);
    console.log("nthMine = " + nthMine);
    for(var i = 0; i < nthMine.length; i++){
        console.log(Math.floor(nthMine[i] / b) + ", " + (nthMine[i] % b));
    }
    for(var n = 0; n < nthMine.length; n++){
        matrix[Math.floor(nthMine[n]/b)][nthMine[n] % b].mine = true;
    }
    return matrix;
}
function toGetRandomNum(min,max,num){//生成指定范围，指定数量的随机数
	var arr = [];
	var tempObj = {};
	var index = -1;
	function toGenerateNth(){
		if(arr.length < num){
			index = parseInt(Math.random() * max,10) + min;
			if(!tempObj[index]){
				tempObj[index] = true;
				arr.push(index);
				toGenerateNth();
			}else{
				toGenerateNth();
			}
		}
	}
	toGenerateNth();
	return arr;
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
