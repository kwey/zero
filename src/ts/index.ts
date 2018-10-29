
import { ConfigInterface } from '../rebuildConfig';
class Demo {
    prefix: string;
    container: HTMLElement;
    first: Function;

    constructor(config: ConfigInterface) {
        this.container = config.container;
        this.prefix = 'kwe';
        this.container.classList.add(this.prefix);
        this.init();
    }

    init() {
        this.first = () => {
            this.container.innerText = 'TYPESCRIPT DEMO';
        };
        this.first();
    }
}

export default Demo;
