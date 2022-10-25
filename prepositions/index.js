import { PREPOSITIONS } from '../src/word-arrays/prepositions.js';
import { Counter } from '../src/counter.js';
import { shuffle } from '../src/utils.js';
import { Bindings } from '../src/bindings.js';
import { dynamicTemplate } from '../src/dynamic-template.js';

let started = false;
let words;
let counter;
let bindings;

const countInput = document.getElementById('count');

document.getElementById('button').addEventListener('click', function () {
    this.innerHTML = 'Restart';
    const value = Boolean(countInput.value) && Number(countInput.value);
    if (Boolean(value) && value <= PREPOSITIONS.length) {
        start(value)
    } else {
        start();
    }
});

function start(wordsCount = PREPOSITIONS.length) {
    if (!started) {
        window.addEventListener('keyup', (event) => {
            if (event.code !== 'Enter') {
                return;
            }

            if (counter.full) {
                return;
            }

            event.preventDefault();

            const result = words[counter.wordIndex].check();

            if (result) {
                counter.increase();

                if (counter.full) {
                    console.log('counter', counter);
                    alert('Все!');

                    return;
                }

                bindings.refresh();
            } else {
                counter.countError();
                alert(`Неправильно! Правильный вариант: ${ words[counter.wordIndex].correctWord }`);
                bindings.refresh(['error']);
            }
        });

        started = true;
    }

    document.getElementById('dynamic').innerHTML = dynamicTemplate;
    words = shuffle(PREPOSITIONS.slice(PREPOSITIONS.length - wordsCount));
    counter = new Counter(wordsCount);
    bindings = new Bindings([
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

    bindings.refresh();
}

