import { WORDS } from '../src/words.js';

let dictionaryIndex = 0;
let errorsCount = 0;
let completed = false;

const input = document.getElementById('check');
const question = document.getElementById('question');
const counter = document.getElementById('counter');
const errorsCounter = document.getElementById('errors');

shuffle(WORDS);

updateCounters();

question.innerHTML = WORDS[0].russian;

document.addEventListener('keydown', (event) => {
	if (event.code === 'Enter') {
		event.preventDefault();
		check();
	}
});

function updateCounters() {
	counter.innerHTML = `${dictionaryIndex}/${WORDS.length}`;
	errorsCounter.innerHTML = `${errorsCount}`;
}

function check() {
	const value = input.value;

	if (!Boolean(value) || completed) {
		return;
	}

	if (value !== WORDS[dictionaryIndex].german) {
		errorsCount++;
		updateCounters();
		alert('Неправильно! Правильный вариант: ' + WORDS[dictionaryIndex].german);

		return;
	}

	dictionaryIndex++;

	updateCounters();

	if (dictionaryIndex >= WORDS.length) {
		alert('Все!');
		completed = true;

		return;
	}

	question.innerHTML = WORDS[dictionaryIndex].russian;
	input.value = null;

	return;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// class Word {
// 	single = null;
// 	multiple = null;
// 	type = null;
// 	fall = null;

// 	constructor(config) {

// 	}
// }
