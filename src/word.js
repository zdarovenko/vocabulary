import { VERB_CONFIG, NOUN_CONFIG } from './template-configs.js';
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
		return this.infinitiveInput.value === this.infinitive && this.imperfectInput.value === this.imperfect && this.perfectInput.value === this.perfect;
	}

	resetFocus() {
		this.infinitiveInput.focus();
	}

	get infinitiveInput() {
		return document.getElementById('infinitive');
	}

	get imperfectInput() {
		return document.getElementById('imperfect');
	}

	get perfectInput() {
		return document.getElementById('perfect');
	}

	get correctWord() {
		return `${ this.infinitive } ${ this.imperfect } ${ this.perfect }`;
	}
}

export class Noun extends Word {

	article;
	singular;
	plural;
	onlySingular;
	onlyPlural;

	constructor(russian, article, singular, plural, onlySingular = false, onlyPlural = false) {
		super('noun', russian);
		this.article = article;
		this.singular = singular;
		this.plural = plural;
		this.onlySingular = onlySingular;
		this.onlyPlural = onlyPlural;

		this.templateConfig = NOUN_CONFIG;
	}

	check() {
		if (this.onlySingularCheckbox.checked) {
			return this.articleInput.value === this.article && this.singularInput.value === this.singular && !Boolean(this.pluralInput.value);
		}

		if (this.onlyPluralCheckbox.checked) {
			return this.articleInput.value === this.article && this.pluralInput.value === this.plural && !Boolean(this.singularInput.value);
		}

		return this.articleInput.value === this.article && this.singularInput.value === this.singular && this.pluralInput.value === this.plural;
	}

	resetFocus() {
		this.articleInput.focus();
	}

	get articleInput() {
		return document.getElementById('article');
	}

	get singularInput() {
		return document.getElementById('singular');
	}

	get pluralInput() {
		return document.getElementById('plural');
	}

	get onlySingularCheckbox() {
		return document.getElementById('only-singular');
	}

	get onlyPluralCheckbox() {
		return document.getElementById('only-plural');
	}

	get correctWord() {
		if (this.onlySingularCheckbox.checked) {
			return `${ this.article } ${ this.singular }, только единственное число`;
		}

		if (this.onlyPluralCheckbox.checked) {
			return `${ this.article } ${ this.plural }, только множественное число`;
		}

		return `${ this.article } ${ this.singular }, ${ this.plural }`;
	}
}
