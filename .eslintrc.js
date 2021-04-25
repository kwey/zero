module.exports = {
    extends: ['alloy', 'alloy/typescript'],
    env: {
        // 您的环境变量（包含多个预定义的全局变量）
        // Your environments (which contains several predefined global variables)
        //
        // browser: true,
        // node: true,
        // jest: true,
    },
    globals: {
        // 您的全局变量（设置为 false 表示它不允许被重新赋值）
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        "camelcase": [2, {"properties": "always"}] ,
        '@typescript-eslint/explicit-member-accessibility': 0,
        // '@typescript-eslint/camelcase': 'error',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/no-explicit-any': 'error'
    }
}
