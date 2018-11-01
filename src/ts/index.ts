
import { ConfigInterface } from '../rebuild-config';
class Demo {
    prefix: string;
    container: HTMLElement;
    first: Function;

    constructor(config: ConfigInterface) {
        this.container = config.container;
        this.prefix = 'kwe';
        this.container.classList.add(this.prefix);
        this.init();
        const aa = [1, 4, 5];
        // for (const i in let) {
        //     console.log(i);
        // }
    }

    init() {
        this.first = () => {
            this.container.innerText = 'TYPESCRIPT DEMO';
        };
        this.first();
    }
}

export default Demo;
