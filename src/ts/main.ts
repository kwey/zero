import { ConfigInterface } from '..'
class Main {
    config: ConfigInterface
    container: HTMLElement
    first: Function

    constructor(config: ConfigInterface) {
        this.config = config
        this.container = config.container
        this.container.classList.add(this.config.prefix)
        this.init()
    }
    init() {
        this.first = () => {
            this.container.innerText = 'TYPESCRIPT DEMO'
        }
        this.first()
    }
    test(a: number, b: number) {
        console.log('test')
        return a + b
    }
}

export default Main
