console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let image = document.querySelector('img');
let form = document.querySelector('#contact');
let color = document.getElementById('color');
let place = document.getElementById('place');
let ritual = document.getElementById('ritual');


image.addEventListener('mouseover', () => alert('Hello'))
form.addEventListener('submit', handleSubmit);
color.addEventListener('click', () => alert('Red'));
place.addEventListener('click', () => alert('My bed'));
ritual.addEventListener('click', () => alert('In the morning I will hit the snooze button like a boss'));

