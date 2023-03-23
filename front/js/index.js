
//jQuery time
var current_fs, next_fs; //fieldsets
var animating; //flag to prevent quick multi-click glitches

animating = false;


x = progressbar.getElementsByTagName("LI").length;
var e = document.getElementsByTagName("LI");
for (let i=0;i<x;i++){
	e[i].style.width = (100/x)+'%';
}

