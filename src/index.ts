import './static/index.less'

import metadata, { IData } from './metadata'
import { Zero } from './ts/zero'

export interface IConfig {
	container: HTMLElement
	name: string
	prefix?: string
	metadata?: IData
}

export default class KWE {
	static metadata = metadata
	private config: Required<IConfig>
	zero!: Zero

	constructor(config: IConfig) {
		this.config = {
			metadata,
			prefix: 'kwe',
			...config,
		}
		this.init()
	}

	private init() {
		this.zero = new Zero(this.config)
	}
}
