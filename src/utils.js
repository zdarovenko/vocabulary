export function generateTemplate(config, parentElement = null) {
    const elementsArray = config.map((item) => {
        const element = document.createElement(item.tagName);

        if (Boolean(item.className)) {
            element.className = item.className;
        }

        if (Boolean(item.attributes)) {
            item.attributes.forEach((attribute) => {
                element.setAttribute(attribute.name, attribute.value);
            });
        }

        if (Boolean(item.content)) {
            element.innerHTML = item.content;
        }

        if (Boolean(item.children) && Boolean(item.children.length)) {
            generateTemplate(item.children, element);
        }

        return element;
    });

    if (Boolean(parentElement)) {
        elementsArray.forEach((elem) => {
            parentElement.appendChild(elem);
        })
    } else {
        return elementsArray;
    }
}

export function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}