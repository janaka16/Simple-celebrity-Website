var hamburger = document.querySelector(".hamb");
var hamburger = document.querySelector(".nav-list");
var hamburger = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
	this.classList.toggle("click");
	navlist.classList.toggle("open");
});
