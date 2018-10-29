/// <reference path='../types/index.d.ts'/>

import './static/index.less';

import index from './ts/index';
import rebuildConfig, { ConfigInterface }from './rebuildConfig';
import { metadata } from './metadata';

export class Demo {
    constructor(config: any) {
        const options: ConfigInterface = rebuildConfig(config);
        options.metadata = metadata;
        const d = new index(options);
    }
}

window['Demo'] = Demo;
