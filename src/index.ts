// <reference path='../types/index.d.ts'/>

import '../types/index.d.ts';
import './static/index.less';

import index from './ts/index';
import { metadata, DataInterface } from './metadata';

export interface ConfigInterface {
    container: HTMLElement;
    name: string;
    metadata?: DataInterface;
}

export class Demo {
    constructor(config: any) {
        config.metadata = metadata;
        const d = new index(config);
        console.log('object');
    }
}

window['Demo'] = Demo;
