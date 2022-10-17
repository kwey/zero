export function htmlEscape(arg: string): string {
    return arg
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
}
export function supportCss3(style: string) {
    const prefix = ['', 'webkit-', 'Moz-', 'ms-', 'o-']
    const htmlStyle = document.documentElement.style
    const toHumb = (str: string) => {
        return str.replace(/-(\w)/g, ($0, $1) => {
            return $1.toUpperCase()
        })
    }
    let name = ''
    for (const ele of prefix) {
        name = toHumb(ele + style)
        if (name in htmlStyle) {
            return ele ? `-${ele + style}` : style
        }
    }
    return false
}