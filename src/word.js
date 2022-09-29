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

	infinitive;
	imperfect;
	perfect;

	constructor(russian, infinitive, imperfect, perfect) {
		super('verb', russian);
		this.infinitive = infinitive;
		this.imperfect = imperfect;
		this.perfect = perfect;

		this.templateConfig = VERB_CONFIG;
	}

	check() {
		if (!Boolean(this.infinitiveInput) || !Boolean(this.imperfectInput) || !Boolean(this.perfectInput)) {
			return false;
		}
		
		return this.infinitiveInput.value === this.infinitive && this.imperfectInput.value === this.imperfect && this.perfectInput.value === this.perfect;
	}

	resetFocus() {
		this.infinitiveInput.focus();
	}

	get infinitiveInput() {
		return document.getElementById('infinitive') || null;
	}

	get imperfectInput() {
		return document.getElementById('imperfect') || null;
	}

	get perfectInput() {
		return document.getElementById('perfect') || null;
	}

	get correctWord() {
		return `${ this.infinitive } ${ this.imperfect } ${ this.perfect }`;
	}
}
