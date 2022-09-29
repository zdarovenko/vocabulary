import { VERBS } from '../src/words.js';
import { Counter } from '../src/counter.js';
import { shuffle } from '../src/utils.js';
import { Bindings } from '../src/bindings.js';

const counter = new Counter(VERBS.length);

const bindings = new Bindings([
    {
        key: 'russian',
        type: 'plain',
        value: () => VERBS[counter.wordIndex].russian,
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
        value: () => VERBS[counter.wordIndex].generateWordTemplate.call(VERBS[counter.wordIndex]),
        postRefresh: () => VERBS[counter.wordIndex].resetFocus.call(VERBS[counter.wordIndex])
    },
])

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
            bindings.refresh(['current']);

            return;
        }

        bindings.refresh();
    } else {
        counter.countError();
        bindings.refresh(['error']);
        alert(`Неправильно! Правильный вариант: ${ VERBS[counter.wordIndex].correctWord }`);
    }
});

function start() {
    shuffle(VERBS);
    bindings.refresh();
}


start();
