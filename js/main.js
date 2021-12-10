var i = 0;
function reveal() {
	if(!i){
		dots.style.display = "none";
		btn.innerHTML = "Read Less";
		readmore.style.display = "inline";
		i = 1;
	}
	else{
		dots.style.display = "inline";
		btn.innerHTML = "Read More";
		readmore.style.display = "none";
		i = 0;
	}
}
function disappear() {
	var ovr = document.getElementsByClassName("overlay-text")[0];
	ovr.style.display = "none";
}
var o = 0;
function extracream() {
	if(!o){
		newhidden.style.display = "inline";
		btn1.innerHTML = "Less Flavours";
		o = 1;
	}
	else{
		newhidden.style.display = "none";
		btn1.innerHTML = "More Flavours";
		o = 0;
	}
}
