//jQuery time
var current_fs, next_fs; //fieldsets
var animating; //flag to prevent quick multi-click glitches

animating = false;

$(".action-button").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset
    current_fs.hide();
    animating = false;
});

x = progressbar.getElementsByTagName("LI").length;
console.log(x);
var e = document.getElementsByTagName("LI");
for (let i=0;i<x;i++){
	console.log(i);
	e[i].style.width = (100/x)+'%';
}