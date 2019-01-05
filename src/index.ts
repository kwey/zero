/// <reference path='../types/index.d.ts'/>

import './static/index.less';

import index from './ts/index';
import { metadata, DataInterface } from './metadata';

export interface ConfigInterface {
    container: HTMLElement;
    name: string;
    metadata?: DataInterface;
}

class KWE {
    constructor(config: any) {
        config.metadata = metadata;
        new index(config);
    }
}

export default KWE;
