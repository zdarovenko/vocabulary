export class Bindings {

    config;

    constructor(config) {
        this.config = config;
    }

    refresh() {
        this.config.forEach((item) => {
            const targets = document.querySelectorAll(`[binding="${ item.key }"]`);

            switch (item.type) {
                case 'plain':
                    targets.forEach((element) => {
                        element.innerHTML = item.value();
                    });

                    break;
                case 'deep':
                    targets.forEach((element) => {
                        element.childNodes.forEach((el) => {
                            el.remove();
                        });

                        item.value().forEach((templateElement) => {
                            element.appendChild(templateElement);
                        })
                    });

                    break;
            }

            if (Boolean(item.postRefresh)) {
                item.postRefresh();
            }
        });
    }
}
