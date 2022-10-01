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
