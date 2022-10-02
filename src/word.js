import { VERB_CONFIG, NOUN_CONFIG } from './template-configs.js';
import { generateTemplate } from './utils.js';
import { WordForm } from './word-form.js';

class Word {
	russian;
	partOfSpeech;
	templateConfig;
	wordForm;

	constructor(partOfSpeech, russian, wordForm) {
		this.partOfSpeech = partOfSpeech;
		this.russian = russian;
		this.wordForm = wordForm;
	}

	generateWordTemplate() {
		return generateTemplate(this.templateConfig);
	}

	check() {
		return this.wordForm.valid();
	}
}

export class Verb extends Word {

	infinitive;
	imperfect;
	perfect;

	constructor(russian, infinitive, imperfect, perfect) {
		const wordForm = new WordForm([
			{
				key: 'infinitive',
				validator: infinitive
			},
			{
				key: 'imperfect',
				validator: imperfect
			},
			{
				key: 'perfect',
				validator: perfect
			},
		]);
		super('verb', russian, wordForm);
		this.infinitive = infinitive;
		this.imperfect = imperfect;
		this.perfect = perfect;

		this.templateConfig = VERB_CONFIG;
	}

	resetFocus() {
		document.getElementById('infinitive').focus();
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
		const wordForm = new WordForm([
			{
				key: 'article',
				validator: article
			},
			{
				key: 'singular',
				validator: singular
			},
			{
				key: 'plural',
				validator: plural
			},
			{
				key: 'onlySingular',
				validator: onlySingular
			},
			{
				key: 'onlyPlural',
				validator: onlyPlural
			},
			{
				key: 'withoutArticle',
				validator: withoutArticle
			},
		]);
		super('verb', russian, wordForm);
		this.article = article;
		this.singular = singular;
		this.plural = plural;
		this.onlySingular = onlySingular;
		this.onlyPlural = onlyPlural;
		this.withoutArticle = withoutArticle;

		this.templateConfig = NOUN_CONFIG;
	}

	resetFocus() {
		document.getElementById('article').focus();
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

export class AdjectiveAdverb extends Word {

	german;

	constructor(russian, german) {
		const wordForm = new WordForm([
			{
				key: 'german',
				validator: german
			},
		]);
		super('verb', russian, wordForm);
		this.german = german;

		this.templateConfig = ADJECTIVE_ADVERB_CONFIG;
	}

	resetFocus() {
		document.getElementById('german').focus();
	}

	get correctWord() {
		return this.german;
	}
}
