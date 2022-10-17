import { IConfig } from '..'
import searchSvg from '../static/img/search.svg'
import { htmlEscape, PPX } from './common'

interface ITemplete {
	input: HTMLInputElement
	btn: HTMLButtonElement
	list: HTMLUListElement
}
export class Search {
	private config: Required<IConfig>
	private container: HTMLElement
	private templete!: ITemplete

	constructor(config: Required<IConfig>) {
		this.config = config
		this.container = config.container
		this.container.classList.add(PPX)
		this.init()
		this.events()
	}

	private init() {
		this.container.insertAdjacentHTML('beforeend', this.tpl())
		this.templete = {
			input: <HTMLInputElement>this.container.querySelector(`.${PPX}-text`),
			btn: <HTMLButtonElement>this.container.querySelector(`.${PPX}-btn`),
			list: <HTMLUListElement>this.container.querySelector(`.${PPX}-list`),
		}
	}

	private events() {
		this.templete.btn.addEventListener('click', () => {
			this.appendList()
		})

		this.templete.input.addEventListener('keyup', (e: KeyboardEvent) => {
			if (e.keyCode === 13) {
				this.appendList()
			}
		})
	}

	appendList(str = this.templete.input.value) {
		const li = `<li>${htmlEscape(str)}</li>`
		this.templete.list.insertAdjacentHTML('beforeend', li)
		this.templete.input.value = ''
	}

	private tpl() {
		return `<h1 class="${PPX}-header">TYPESCRIPT DEMO</h1>
            <div class="${PPX}-search">
                <input type="text" class="${PPX}-text" placeholder="search">
                <span class="${PPX}-btn">${searchSvg}</span>
            </div>
            <ul class="${PPX}-list"></ul>`
	}
}
