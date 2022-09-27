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
