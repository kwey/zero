interface Window {
    // Allow us to put arbitrary objects in window
    [key: string]: any
}

declare module '*.svg' {
    export default string
}
