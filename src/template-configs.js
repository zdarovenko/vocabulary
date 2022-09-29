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
