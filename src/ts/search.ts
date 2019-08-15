import { IConfig } from '..'
import Utils from './utils'
import searchSvg from '../static/img/search.svg'

interface ITemplete {
    input: HTMLInputElement
    btn: HTMLButtonElement
    list: HTMLUListElement
}
// 此模块建议只做模块的初始化，不做任何逻辑
export default class Search {
    prefix: string
    config: IConfig
    container: HTMLElement
    templete: ITemplete

    constructor(config: IConfig) {
        this.config = config
        this.prefix = config.prefix
        this.container = document.querySelector(config.container)
        this.container.classList.add(this.config.prefix)
        this.init()
        this.events()
    }

    init() {
        this.container.innerHTML = this.tpl()
        this.templete = {
            input: this.container.querySelector(`.${this.prefix}-text`),
            btn: this.container.querySelector(`.${this.prefix}-btn`),
            list: this.container.querySelector(`.${this.prefix}-list`)
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
