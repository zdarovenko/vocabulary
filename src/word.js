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
		return this.infinitiveInput.value.trim() === this.infinitive && this.imperfectInput.value.trim() === this.imperfect && this.perfectInput.value.trim() === this.perfect;
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
	withoutArticle;

	constructor(russian, article, singular, plural, onlySingular = false, onlyPlural = false, withoutArticle = false) {
		super('noun', russian);
		this.article = article;
		this.singular = singular;
		this.plural = plural;
		this.onlySingular = onlySingular;
		this.onlyPlural = onlyPlural;
		this.withoutArticle = withoutArticle;

		this.templateConfig = NOUN_CONFIG;
	}

	check() {
		if (this.withoutArticle) {
			return this.withoutArticleCheckbox.checked && !Boolean(this.pluralInput.value) && this.singularInput.value.trim() === this.singular && !Boolean(this.articleInput.value);
		}

		if (this.onlySingular) {
			return this.onlySingularCheckbox.checked && this.articleInput.value.trim() === this.article && this.singularInput.value.trim() === this.singular && !Boolean(this.pluralInput.value);
		}

		if (this.onlyPlural) {
			return this.onlyPluralCheckbox.checked && this.articleInput.value.trim() === this.article && this.pluralInput.value.trim() === this.plural && !Boolean(this.singularInput.value);
		}

		return this.articleInput.value.trim() === this.article && this.singularInput.value.trim() === this.singular && this.pluralInput.value.trim() === this.plural;
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

	get withoutArticleCheckbox() {
		return document.getElementById('without-article');
	}

	get correctWord() {
		if (this.withoutArticle) {
			return `${ this.singular }, без артикля`;
		}

		if (this.onlySingular) {
			return `${ this.article } ${ this.singular }, только единственное число`;
		}

		if (this.onlyPlural) {
			return `${ this.article } ${ this.plural }, только множественное число`;
		}

		return `${ this.article } ${ this.singular }, ${ this.plural }`;
	}
}
