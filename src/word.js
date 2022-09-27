import { VERB_CONFIG } from './template-configs.js';
import { generateTemplate } from './utils.js';

class Word {
	russian;
	partOfSpeech;
	templateConfig;

	constructor(partOfSpeech, russian) {
		this.partOfSpeech = partOfSpeech;
		this.russian = russian;
	}

	generateWordTemplate() {
		return generateTemplate(this.templateConfig);
	}

}

export class Verb extends Word {

	germanFirst;
	germanSecond;
	germanThird;

	constructor(russian, germanFirst, germanSecond, germanThird) {
		super('verb', russian);
		this.germanFirst = germanFirst;
		this.germanSecond = germanSecond;
		this.germanThird = germanThird;

		this.templateConfig = VERB_CONFIG;
	}

	check() {
		return this.presentInput.value === this.germanFirst && this.pastInput.value === this.germanSecond && this.perfectInput.value === this.germanThird;
	}

	resetFocus() {
		this.presentInput.focus();
	}

	get presentInput() {
		return document.getElementById('present');
	}

	get pastInput() {
		return document.getElementById('past');
	}

	get perfectInput() {
		return document.getElementById('perfect');
	}

	get correctWord() {
		return `${ this.germanFirst } ${ this.germanSecond } ${ this.germanThird }`;
	}
}
