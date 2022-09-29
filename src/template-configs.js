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
                        attributes: [{ name: 'type', value: 'checkbox' }, { name: 'id', value: 'only-singular' }]
                    },
                    {
                        tagName: 'label',
                        attributes: [{ name: 'for', value: 'only-singular' }],
                        content: 'Только единственное число'
                    },
                    {
                        tagName: 'input',
                        attributes: [{ name: 'type', value: 'checkbox' }, { name: 'id', value: 'only-plural' }]
                    },
                    {
                        tagName: 'label',
                        attributes: [{ name: 'for', value: 'only-plural' }],
                        content: 'Только множественное число'
                    },
                ]
            }
        ]
    }
];
