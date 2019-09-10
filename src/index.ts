/// <reference path='../types/index.d.ts'/>

import './static/index.less'

import metadata, { IData } from './metadata'
import Main from './ts/main'

export interface IConfig {
    container: string
    name: string
    prefix?: string
    metadata?: IData
}

export default class KWE {
    main: Main
    config: IConfig

    constructor(config: IConfig) {
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

    static metadata() {
        return metadata
    }
}

window.KWE = KWE
