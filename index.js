/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
4 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.getElementById('box');
const typewriter = document.getElementById('typewriter');
const text = document.getElementById('text');

box.addEventListener('focus', function rating() {
	if (typewriter.matches('typewriter')) {
		typewriter.className.remove('typewriter');
	}
	typewriter.className += 'typewriter';
	text.textContent = 'Type a number between 1 and 5';
});

box.addEventListener('focusout', function rules() {
	text.style.backgroundColor = 'transparent';
	text.textContent = 'Click here to give your rating';
});

// Write your code here 👇
box.addEventListener('keydown', function keyboardEvent(e) {
	let number = e.code;
	// eslint-disable-next-line no-console
	console.log(number);

	switch (number) {
		case (number = 'Digit5'):
			text.style.backgroundColor = 'rgb(131, 58, 180)';
			text.style.padding = '10px';
			text.textContent = '😁😁😁😁😁';
			break;
		case (number = 'Digit4'):
			text.style.backgroundColor = 'B52E76';
			text.style.padding = '10px';
			text.textContent = '🙂🙂🙂🙂';
			break;
		case (number = 'Digit3'):
			text.style.backgroundColor = 'rgb(253, 29, 29)';
			text.style.padding = '10px';
			text.textContent = '😐😐😐';
			break;
		case (number = 'Digit2'):
			text.style.backgroundColor = 'FD6531';
			text.style.padding = '10px';
			text.textContent = '☹️️️☹️️️';
			break;
		case (number = 'Digit1'):
			text.style.backgroundColor = 'rgb(252, 176, 69)';
			text.style.padding = '10px';
			text.textContent = '🤬';
			break;
		default:
			if (typewriter.matches('typewriter')) {
				typewriter.className = 'none';
			}
			text.style.backgroundColor = 'transparent';
			typewriter.className += 'typewriter';
			text.textContent = 'Type a number between 1 and 5';
	}
});

/*

DETAILED INSTRUCTIONS
1. Listen for keyboard events when the box has focus
2. Figure out which key the user pressed
3. If it's between 1 and 5, display an emoji in the box!

STRETCH GOALS:
- Animate the emoji onto the screen! Why not go crazy with multiple emojis? 
- Reset the entire app when box doesn't have focus anymore
- Can you improve the overall design?

*/
