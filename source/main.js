//GLOBAL VARIABLES 
var iconObj = document.querySelector('.ham-menu');
var menulist = document.getElementById('nav-list');
var rowNav = document.querySelector('.row-nav');

//LISTENER
iconObj.addEventListener('click', function(evt) {
	menu(evt, '.ham-menu');
}, false);


//FUNCTION
function menu(evt) {
	console.log('heyyyy');
	menulist.classList.toggle('visually-hidden');
	rowNav.classList.toggle('full-length');
	rowNav.classList.toggle('row-nav');
}