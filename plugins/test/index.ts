interface ITestConfig {
    name: string
}

// 作为动态引入模块
export default class Test {
    private config: Required<ITestConfig>

    constructor(config: Required<ITestConfig>) {
        this.config = config
        this.init()
    }

    private init() {
        console.log(this.config.name)
    }
    getName() {
        return this.config.name
    }
}
