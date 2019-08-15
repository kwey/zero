/// <reference path='../types/index.d.ts'/>

import './static/index.less';

import Main from './ts/main'
import { metadata, IData } from './metadata'

export interface IConfig {
    container: HTMLElement
    name: string
    prefix?: string
    metadata?: IData
}
// 此模块建议只做模块的初始化，不做任何逻辑
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
