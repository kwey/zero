import { IConfig } from '..'
import searchSvg from '../static/img/search.svg'
import Utils from './common/utils'

interface ITemplete {
    input: HTMLInputElement
    btn: HTMLButtonElement
    list: HTMLUListElement
}
export default class Search {
    private prefix: string
    private config: Required<IConfig>
    private container: HTMLElement
    private templete!: ITemplete

    constructor(config: Required<IConfig>) {
        this.config = config
        this.prefix = config.prefix
        this.container = <HTMLElement>document.querySelector(config.container)
        this.container.classList.add(this.config.prefix)
        this.init()
        this.events()
    }

    private init() {
        this.container.innerHTML = this.tpl()
        this.templete = {
            input: <HTMLInputElement>this.container.querySelector(`.${this.prefix}-text`),
            btn: <HTMLButtonElement>this.container.querySelector(`.${this.prefix}-btn`),
            list: <HTMLUListElement>this.container.querySelector(`.${this.prefix}-list`)
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

    private appendList() {
        const li = Utils.parseDom(`<li>${Utils.htmlEscape(this.templete.input.value)}</li>`)
        this.templete.list.appendChild(li)
        this.templete.input.value = ''
    }

    private tpl() {
        return `<h1 class="${this.prefix}-header">TYPESCRIPT DEMO</h1>
            <div class="${this.prefix}-search">
                <input type="text" class="${this.prefix}-text" placeholder="search">
                <span class="${this.prefix}-btn">${searchSvg}</span>
            </div>
            <ul class="${this.prefix}-list"></ul>`
    }
}
