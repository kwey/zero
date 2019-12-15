```
{
    "compileOnSave": false,
    "compilerOptions": {
        "strict": true,
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"] // '@/*' 匹配到'src/*'
        },
        "allowJs": true,
        "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。
        "declaration": true, //生成相应的 .d.ts文件。
        "experimentalDecorators": true, // 启用实验性的ES装饰器。
        "esModuleInterop": true,
        "emitDecoratorMetadata": true, // 给源码里的装饰器声明加上设计类型元数据。查看 issue #2577了解更多信息。
        "importHelpers": true, // 	从 tslib 导入辅助工具函数（比如 __extends， __rest等）
        "jsx": "react", // 在 .tsx文件里支持JSX： "React"或 "Preserve"。查看 JSX。
        "module": "esnext", //指定生成哪个模块系统代码： "None"， "CommonJS"， "AMD"， "System"， "UMD"， "ES6"或 "ES2015"。
        // ► 只有 "AMD"和 "System"能和 --outFile一起使用。
        // ► "ES6"和 "ES2015"可使用在目标输出为 "ES5"或更低的情况下。
        "moduleResolution": "node", // 决定如何处理模块。或者是"Node"对于Node.js/io.js，或者是"Classic"（默认）。查看模块解析了解详情。
        "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错。
        "noUnusedLocals": true, // 若有未使用的局部变量则抛错。
        "noUnusedParameters": true, // 若有未使用的参数则抛错。
        "outDir": "./dist/", // 重定向输出目录。
        "pretty": true, // 给错误和消息设置样式，使用颜色和上下文。
        "removeComments": true, // 删除所有注释，除了以 /!*开头的版权信息。
        "skipLibCheck": true, // 忽略所有的声明文件（ *.d.ts）的类型检查。
        "skipDefaultLibCheck": true, // 忽略 库的默认声明文件的类型检查。
        "sourceMap": true, // 生成相应的 .map文件。
        "strictNullChecks": false, // 在严格的 null检查模式下， null和 undefined值不包含在任何类型里，只允许用它们自己和 any来赋值（有个例外， undefined可以赋值到 void）。
        "suppressImplicitAnyIndexErrors": true, // 阻止对对象字面量的额外属性检查。
        "target": "es5", // 指定ECMAScript目标版本 "ES3"（默认）， "ES5"， "ES6"/ "ES2015"， "ES2016"， "ES2017"或 "ESNext"。
        "typeRoots": ["node_modules/@types"],
        // 如果--lib没有指定默认注入的库的列表。默认注入的库为：
        // ► 针对于--target ES5：DOM，ES5，ScriptHost
        // ► 针对于--target ES6：DOM，ES6，DOM.Iterable，ScriptHost
        "lib": ["dom", "scripthost", "esnext"],
        "types": ["cypress"]
    },
    "include": ["**/*"],
    "exclude": ["node_modules", "doc", "__tests__"]
}
```
