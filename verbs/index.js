import { VERBS } from '../src/word-arrays/verbs.js';
import { Counter } from '../src/counter.js';
import { shuffle } from '../src/utils.js';
import { Bindings } from '../src/bindings.js';

const counter = new Counter(VERBS.length);
let words;

const bindings = new Bindings([
    {
        key: 'russian',
        type: 'plain',
        value: () => words[counter.wordIndex].russian,
    },
    {
        key: 'total',
        type: 'plain',
        value: () => counter.totalCount,
    },
    {
        key: 'current',
        type: 'plain',
        value: () => counter.wordIndex + 1,
    },
    {
        key: 'error',
        type: 'plain',
        value: () => counter.errorsCount,
    },
    {
        key: 'main',
        type: 'deep',
        value: () => words[counter.wordIndex].generateWordTemplate.call(words[counter.wordIndex]),
        postRefresh: () => words[counter.wordIndex].resetFocus.call(words[counter.wordIndex])
    },
]);

window.addEventListener('keyup', (event) => {
    if (event.code !== 'Enter') {
        return;
    }

    event.preventDefault();

    const result = words[counter.wordIndex].check();

    if (result) {
        counter.increase();

        if (counter.full) {
            alert('Все!');
            bindings.refresh();

            return;
        }
    } else {
        counter.countError();
        alert(`Неправильно! Правильный вариант: ${ words[counter.wordIndex].correctWord }`);
    }

    bindings.refresh();
});

function start() {
    words = shuffle(VERBS);
    bindings.refresh();
}


start();
