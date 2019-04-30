/// <reference path='../types/index.d.ts'/>

import './static/index.less'

import Main from './ts/main'
import { metadata, DataInterface } from './metadata'

export interface ConfigInterface {
    container: HTMLElement
    name: string
    prefix: string
    metadata?: DataInterface
}

class KWE {
    main: Main
    config: ConfigInterface

    constructor(config: ConfigInterface) {
        this.config = {
            metadata,
            prefix: 'kwe',
            ...config
        }
        this.init()
    }
    private init() {
        this.main = new Main(this.config)
    }
}
export { KWE }
