class Utils {
    static htmlEscape(arg: string): string {
        return arg
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;')
    }

    static parseDom(arg: string): Node {
        const objE = document.createElement('div')
        objE.innerHTML = arg
        return objE.childNodes[0]
    }
}

export default Utils
