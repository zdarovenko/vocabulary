import { ADJECTIVES_ADVERBS } from '../src/word-arrays/adjectives-adverbs.js';
import { PREPOSITIONS } from '../src/word-arrays/prepositions.js';
import { VERBS } from '../src/word-arrays/verbs.js';
import { NOUNS } from '../src/word-arrays/nouns.js';
import { EXPRESSIONS } from '../src/word-arrays/expressions.js';
import { Counter } from '../src/counter.js';
import { shuffle, takeLastFromMultiple } from '../src/utils.js';
import { Bindings } from '../src/bindings.js';
import { dynamicTemplate } from '../src/dynamic-template.js';

let started = false;
let words;
let allWords = [...VERBS, ...NOUNS, ...ADJECTIVES_ADVERBS, ...PREPOSITIONS, ...EXPRESSIONS];
let counter;
let bindings;

const countInput = document.getElementById('count');

document.getElementById('button').addEventListener('click', function () {
    this.innerHTML = 'Restart';
    const value = Boolean(countInput.value) && Number(countInput.value);
    if (Boolean(value) && value <= allWords.length) {
        start(value)
    } else {
        start();
    }
});

function start(wordsCount = allWords.length) {
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

    if (wordsCount === allWords.length) {
        words = shuffle(allWords);
    } else {
        words = shuffle(takeLastFromMultiple(wordsCount, VERBS, NOUNS, ADJECTIVES_ADVERBS, PREPOSITIONS, EXPRESSIONS));
    }

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

