import { DataInterface } from './metadata';

export interface ConfigInterface {
    container: HTMLElement;
    name: string;
    metadata?: DataInterface;
}

const rebuildConfig = (config: ConfigInterface) => {
    return {
        container: config['container'],
        name: config['name'],
    };
};

export default rebuildConfig;
