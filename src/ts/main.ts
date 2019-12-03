import { IConfig } from '..'
import Search from './search'

// 此模块建议只做模块的初始化，不做任何逻辑
export default class Main {
    search: Search
    private config: IConfig

    constructor(config: IConfig) {
        this.config = config
        this.init()
    }

    private init() {
        this.search = new Search(this.config)
    }
}
