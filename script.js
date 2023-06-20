function createRandomButton() {
    var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var randomX = Math.floor(Math.random() * (screenWidth - 100)); 
var randomY = Math.floor(Math.random() * (screenHeight - 30)); 

var button = document.createElement('button');
button.className = 'btn';
button.style.position = 'absolute';
button.style.left = randomX + 'px';
button.style.top = randomY + 'px';
button.style.width = '100px';
button.innerText = 'CLICK ME'; 

var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
button.style.backgroundColor = randomColor;

var background = document.createElement('div');
background.className = 'background';
background.style.position = 'absolute';
background.style.left = (randomX - 15) + 'px'; 
background.style.top = (randomY - 15) + 'px';
background.style.width = '130px';
background.style.height = '70px';

var randomBackgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
background.style.backgroundColor = randomBackgroundColor;

button.onclick = createRandomButton;

document.body.appendChild(background); 
document.body.appendChild(button);
}