export const VERB_CONFIG = [
    {
        tagName: 'div',
        className: 'flex flex-row',
        children: [
            {
                tagName: 'div',
                className: 'flex flex-column',
                children: [
                    {
                        tagName: 'span',
                        content: 'Präsens'
                    },
                    {
                        tagName: 'input',
                        attributes: [{ name: 'id', value: 'infinitive' }]
                    }
                ]
            },
            {
                tagName: 'div',
                className: 'flex flex-column',
                children: [
                    {
                        tagName: 'span',
                        content: 'Er/sie/es'
                    },
                    {
                        tagName: 'input',
                        attributes: [{ name: 'id', value: 'declination' }]
                    }
                ]
            },
            {
                tagName: 'div',
                className: 'flex flex-column',
                children: [
                    {
                        tagName: 'span',
                        content: 'Partizip II'
                    },
                    {
                        tagName: 'input',
                        attributes: [{ name: 'id', value: 'imperfect' }]
                    }
                ]
            },
            {
                tagName: 'div',
                className: 'flex flex-column',
                children: [
                    {
                        tagName: 'span',
                        content: 'Perfekt'
                    },
                    {
                        tagName: 'input',
                        attributes: [{ name: 'id', value: 'perfect' }]
                    }
                ]
            },
        ]
    }
];

export const NOUN_CONFIG = [
    {
        tagName: 'div',
        className: 'flex flex-column',
        children: [
            {
                tagName: 'div',
                className: 'flex flex-row',
                children: [
                    {
                        tagName: 'div',
                        className: 'flex flex-column',
                        children: [
                            {
                                tagName: 'span',
                                content: 'Artikel'
                            },
                            {
                                tagName: 'input',
                                attributes: [{ name: 'id', value: 'article' }]
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        className: 'flex flex-column',
                        children: [
                            {
                                tagName: 'span',
                                content: 'Singular'
                            },
                            {
                                tagName: 'input',
                                attributes: [{ name: 'id', value: 'singular' }]
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        className: 'flex flex-column',
                        children: [
                            {
                                tagName: 'span',
                                content: 'Plural'
                            },
                            {
                                tagName: 'input',
                                attributes: [{ name: 'id', value: 'plural' }]
                            }
                        ]
                    },
                ]
            },
            {
                tagName: 'div',
                className: 'flex flex-row',
                children: [
                    {
                        tagName: 'input',
                        attributes: [{ name: 'type', value: 'checkbox' }, { name: 'id', value: 'onlySingular' }]
                    },
                    {
                        tagName: 'label',
                        attributes: [{ name: 'for', value: 'onlySingular' }],
                        content: 'Только единственное число'
                    },
                    {
                        tagName: 'input',
                        attributes: [{ name: 'type', value: 'checkbox' }, { name: 'id', value: 'onlyPlural' }]
                    },
                    {
                        tagName: 'label',
                        attributes: [{ name: 'for', value: 'onlyPlural' }],
                        content: 'Только множественное число'
                    },
                    {
                        tagName: 'input',
                        attributes: [{ name: 'type', value: 'checkbox' }, { name: 'id', value: 'withoutArticle' }]
                    },
                    {
                        tagName: 'label',
                        attributes: [{ name: 'for', value: 'withoutArticle' }],
                        content: 'Без артикля'
                    },
                ]
            }
        ]
    }
];

export const PREPOSITION_CONFIG = [
    {
        tagName: 'div',
        className: 'flex flex-row',
        children: [
            {
                tagName: 'div',
                className: 'flex flex-column',
                children: [
                    {
                        tagName: 'span',
                        content: 'Deutsch'
                    },
                    {
                        tagName: 'input',
                        attributes: [{ name: 'id', value: 'german' }]
                    }
                ]
            },
            {
                tagName: 'div',
                className: 'flex flex-column',
                children: [
                    {
                        tagName: 'span',
                        content: 'Fall'
                    },
                    {
                        tagName: 'select',
                        attributes: [{ name: 'id', value: 'declinationCase' }, { name: 'oninput', value: 'this.blur()' }, { name: 'null-text', value: 'case' }],
                        children: [
                            {
                                tagName: 'option',
                                attributes: [{ name: 'value', value: '' }],
                                content: 'Выбрать'
                            },
                            {
                                tagName: 'option',
                                attributes: [{ name: 'value', value: 'D' }],
                                content: 'Dativ'
                            },
                            {
                                tagName: 'option',
                                attributes: [{ name: 'value', value: 'A' }],
                                content: 'Akkusativ'
                            },
                            {
                                tagName: 'option',
                                attributes: [{ name: 'value', value: 'G' }],
                                content: 'Genitiv'
                            },
                            {
                                tagName: 'option',
                                attributes: [{ name: 'value', value: 'AD' }],
                                content: 'Akkusativ und Dativ'
                            },
                        ]
                    }
                ]
            },
        ]
    }
];

export const ADJECTIVE_ADVERB_CONFIG = [
    {
        tagName: 'div',
        className: 'flex flex-row',
        children: [
            {
                tagName: 'div',
                className: 'flex flex-column',
                children: [
                    {
                        tagName: 'span',
                        content: 'Deutsch'
                    },
                    {
                        tagName: 'input',
                        attributes: [{ name: 'id', value: 'german' }]
                    }
                ]
            },
        ]
    }
];
