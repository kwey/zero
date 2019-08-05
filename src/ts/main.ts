import { ConfigInterface } from '..'
export default class Main {
    config: ConfigInterface
    container: HTMLElement

    constructor(config: ConfigInterface) {
        this.config = config
        this.container = config.container
        this.container.classList.add(this.config.prefix)
        this.init()
    }

    init() {
        this.container.innerText = 'TYPESCRIPT DEMO'
    }
}
