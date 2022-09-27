export const VERB_CONFIG = [
    {
        tagName: 'div',
        className: 'flex flex-row removable',
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
                        attributes: [{ name: 'id', value: 'present' }]
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
                        attributes: [{ name: 'id', value: 'past' }]
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
