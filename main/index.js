// import { WORDS } from '../src/words.js';
import { generateTemplate } from '../src/generate-template.js';

const main = document.getElementById('main');

const elements = generateTemplate([
	{
		tagName: 'div',
		className: 'class-name',
		attributes: [{ name: 'id', value: 'a' }],
		children: [
			{
				tagName: 'div',
				className: 'class-name-1',
				attributes: [{ name: 'id', value: 'b' }],
				children: [
					{
						tagName: 'span',
						className: 'class-name-2',
						attributes: [{ name: 'id', value: 'c' }],
						content: '565656565 test'
					}
				]
			}
		]
	},
	{
		tagName: 'div',
		className: 'class-name-3',
		attributes: [{ name: 'id', value: 'd' }],
		children: [
			{
				tagName: 'span',
				className: 'class-name-4',
				attributes: [{ name: 'id', value: 'd' }],
				content: '121212121 test'
			}
		]
	}
]);

elements.forEach((element) => {
	console.dir(element);
	main.appendChild(element);
})

// let dictionaryIndex = 0;
// let errorsCount = 0;
// let completed = false;
//
// const input = document.getElementById('check');
// const question = document.getElementById('question');
// const counter = document.getElementById('counter');
// const errorsCounter = document.getElementById('errors');
//
// shuffle(WORDS);
//
// updateCounters();
//
// question.innerHTML = WORDS[0].russian;
//
// document.addEventListener('keydown', (event) => {
// 	if (event.code === 'Enter') {
// 		event.preventDefault();
// 		check();
// 	}
// });
//
// function updateCounters() {
// 	counter.innerHTML = `${dictionaryIndex}/${WORDS.length}`;
// 	errorsCounter.innerHTML = `${errorsCount}`;
// }
//
// function check() {
// 	const value = input.value;
//
// 	if (!Boolean(value) || completed) {
// 		return;
// 	}
//
// 	if (value !== WORDS[dictionaryIndex].german) {
// 		errorsCount++;
// 		updateCounters();
// 		alert('Неправильно! Правильный вариант: ' + WORDS[dictionaryIndex].german);
//
// 		return;
// 	}
//
// 	dictionaryIndex++;
//
// 	updateCounters();
//
// 	if (dictionaryIndex >= WORDS.length) {
// 		alert('Все!');
// 		completed = true;
//
// 		return;
// 	}
//
// 	question.innerHTML = WORDS[dictionaryIndex].russian;
// 	input.value = null;
//
// 	return;
// }
//
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
//
// // class Word {
// // 	single = null;
// // 	multiple = null;
// // 	type = null;
// // 	fall = null;
//
// // 	constructor(config) {
//
// // 	}
// // }
