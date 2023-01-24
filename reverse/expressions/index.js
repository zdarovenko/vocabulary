import { EXPRESSIONS } from '../../src/word-arrays/expressions.js';
import { Counter } from '../../src/counter.js';
import { shuffle, takeFourWords } from '../../src/utils.js';
import { Bindings } from '../../src/bindings.js';
import { dynamicReverseTemplate } from '../../src/dynamic-template.js';

let started = false;
let words;
let counter;
let bindings;
let option1;
let option2;
let option3;
let option4;

const countInput = document.getElementById('count');

document.getElementById('button').addEventListener('click', function () {
    this.innerHTML = 'Restart';
    const value = Boolean(countInput.value) && Number(countInput.value);
    if (Boolean(value) && value <= EXPRESSIONS.length) {
        start(value)
    } else {
        start();
    }
});

function start(wordsCount = EXPRESSIONS.length) {
    if (!started) {
        window.addEventListener('keyup', (event) => {
            if (event.code !== 'Enter') {
                return;
            }

            if (counter.full) {
                return;
            }

            event.preventDefault();

            const checked = document.querySelectorAll(`[type="radio"]:checked`);

            if (!Boolean(checked.length)) {
                return;
            }

            if (words[counter.wordIndex].checkReverse(checked[0].value)) {
                counter.increase();
                checked[0].checked = false;
                checked[0].blur();

                if (counter.full) {
                    alert('Все!');

                    return;
                }

                [option1, option2, option3, option4] = takeFourWords(words[counter.wordIndex], EXPRESSIONS, counter);

                bindings.refresh();
            } else {
                counter.countError();
                alert(`Неправильно! Правильный вариант: ${ words[counter.wordIndex].correctWord }`);
                bindings.refresh(['error']);
            }
        });

        started = true;
    }

    document.getElementById('dynamic').innerHTML = dynamicReverseTemplate;
    words = shuffle(EXPRESSIONS.slice(EXPRESSIONS.length - wordsCount));
    counter = new Counter(wordsCount);
    [option1, option2, option3, option4] = takeFourWords(words[counter.wordIndex], EXPRESSIONS, counter);
    bindings = new Bindings([
        {
            key: 'german',
            type: 'plain',
            value: () => words[counter.wordIndex].correctWord,
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
            key: 'label1',
            type: 'plain',
            value: () => option1,
        },
        {
            key: 'label2',
            type: 'plain',
            value: () => option2,
        },
        {
            key: 'label3',
            type: 'plain',
            value: () => option3,
        },
        {
            key: 'label4',
            type: 'plain',
            value: () => option4,
        },
        {
            key: 'value1',
            type: 'value',
            value: () => option1,
        },
        {
            key: 'value2',
            type: 'value',
            value: () => option2,
        },
        {
            key: 'value3',
            type: 'value',
            value: () => option3,
        },
        {
            key: 'value4',
            type: 'value',
            value: () => option4,
        },
    ]);

    bindings.refresh();
}

