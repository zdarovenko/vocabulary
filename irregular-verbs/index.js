import { VERBS } from '../src/words.js';
import { Counter } from '../src/counter.js';

function clearElements() {
    const elementsToRemove = document.querySelectorAll('.removable');

    elementsToRemove.forEach((element) => {
        element.remove();
    })
}

function appendElements(parent, elements) {
    elements.forEach((element) => {
        parent.appendChild(element);
    });
}

function refreshCounter(counter, current, total, error) {
    current.innerHTML = counter.displayWordIndex;
    total.innerHTML = counter.totalCount;
    error.innerHTML = counter.errorsCount;
}

function refreshTranslation(russian, value) {
    russian.innerHTML = value;
}

function start() {
    refreshCounter(counter, currentCount, totalCount, errorCount);
    refreshTranslation(russian, VERBS[counter.wordIndex].russian);
    appendElements(main, VERBS[counter.wordIndex].generateWordTemplate());
}

const main = document.getElementById('main');
const russian = document.getElementById('russian');
const currentCount = document.getElementById('currentCount');
const totalCount = document.getElementById('totalCount');
const errorCount = document.getElementById('errorCount');

const counter = new Counter(VERBS.length);

window.addEventListener('keyup', (event) => {
    if (event.code !== 'Enter') {
        return;
    }

    event.preventDefault();

    const result = VERBS[counter.wordIndex].check();

    if (result) {
        counter.increase();

        if (counter.full) {
            alert('Все!');

            return;
        }

        clearElements();
        refreshCounter(counter, currentCount, totalCount, errorCount);
        refreshTranslation(russian, VERBS[counter.wordIndex].russian);
        appendElements(main, VERBS[counter.wordIndex].generateWordTemplate());
        VERBS[counter.wordIndex].resetFocus();
    } else {
        counter.countError();
        refreshCounter(counter, currentCount, totalCount, errorCount);
        alert(`Неправильно! Правильный вариант: ${ VERBS[counter.wordIndex].correctWord }`);
    }
});


start();
