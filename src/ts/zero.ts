import { IConfig } from '..'
import Search from './search'

import Test from '../../plugins/test'

// 此模块建议只做模块的初始化，不做任何逻辑
export default class Zero {
    private config: Required<IConfig>
    private asyncPromise!: Promise<typeof Test>
    private test: Test | undefined
    search!: Search

    constructor(config: Required<IConfig>) {
        this.config = config
        this.init()
    }

    private init() {
       
        

        const { container, prefix } = this.config

        container.insertAdjacentHTML('beforeend', this.tpl(prefix))
        const async = container.querySelector(`.${prefix}-async`)

        async!.addEventListener('click', () => {
            if (this.asyncPromise || this.test) {
                this.runTest()
                return;
            }
            this.asyncLoad()
                .then((Test) => {
                    this.test = new Test({name: 'test----'})
                    this.runTest()
                })
                .catch((err) => {
                    console.warn(err)
                })
        })
        this.search = new Search(this.config)
        
    }

    private runTest() {
        if (!this.test) {
            return;
        }
        const name = this.test.getName()
        this.search.appendList(name)
        
    }
    private asyncLoad() {
        if (!this.asyncPromise) {
            this.asyncPromise = new Promise((res, rej) => {
                // webpack 动态加载 文档
                // https://webpack.docschina.org/api/module-methods/#import-
                import(/* webpackChunkName: "test" */ 'test')
                    .then((s) => {
                        res(s.default)
                    })
                    .catch((err) => {
                        rej(err)
                    })
            })
        }
        return this.asyncPromise
    }

    private tpl(prefix: string) {
        return `<div class="${prefix}-async">动态加载模块</div>`
    }
}
