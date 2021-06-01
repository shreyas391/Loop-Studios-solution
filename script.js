function openFunction() {
	document.querySelector(".atags").style.width="450px";
	document.querySelector(".atags").style.marginLeft="0px";
	document.querySelector(".atags").style.width="450px";
	document.querySelector(".mainbox").innerHTML=document.querySelector(".close");
}

function closeFunction() {
	document.querySelector(".atags").style.width="0px";
	document.querySelector(".atags").style.marginLeft="0px";
	document.querySelector(".mainbox").innerHTML=document.querySelector("#click");
}
AOS.init();