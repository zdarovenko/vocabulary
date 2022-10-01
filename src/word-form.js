export class WordForm {

    items = {};

    constructor(config) {
        config.forEach((configItem) => {
            this.items[configItem.key] = new WordFormItem(configItem.key, configItem.validator);
        });
    }

    valid() {
        let result = true;

        Object.values(this.items).forEach((formItem) => {
            result = result && formItem.valid();
        });

        return result;
    }
}

export class WordFormItem {

    key;
    validator;

    constructor(key, validator) {
        this.key = key;
        this.validator = validator;
    }

    get inputElement() {
        return document.getElementById(this.key);
    }

    valid() {
        switch (typeof this.validator) {
            case 'string':

                return this.inputElement.value.trim() === this.validator;
            case 'boolean':

                return this.inputElement.checked === this.validator;
            case 'object':
                // if validator === null

                return !Boolean(this.inputElement.value);
        }
    }
}
