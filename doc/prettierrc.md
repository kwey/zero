// doc https://prettier.io/docs/en/options.html

```
{
  "printWidth": 80, //一行的字符数，如果超过会进行换行，默认为80

  "tabWidth": 2, //一个tab代表几个空格数，默认为2

  "useTabs": false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减

  "singleQuote": false, //字符串是否使用单引号，默认为false，使用双引号

  "bracketSpacing": true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }

  "parser": "babylon", //代码的解析引擎，默认为babylon，与babel相同。

  "semi": true, // 在语句末尾打印分号,
  // true-在每个语句的末尾添加分号。
  // false-只在可能导致ASI失败的行的开头添加分号。

  "quoteProps": "as-needed",// 当引用对象中的属性时进行更改。
  // “as-needed-仅在需要时在对象属性周围添加引号。
  // “consistent”—如果对象中至少有一个属性需要引号，请对所有属性进行引号。
  // “preserve”-保留对象属性中引号的输入使用。

  "jsxSingleQuote": false, // 在JSX中使用单引号。

  "trailingComma": "none",// 多行时尽可能打印尾随逗号
  // none-无尾随逗号。
  // es5—在es5中有效的尾随逗号（对象、数组等）
  // all-尽可能尾随逗号（包括函数参数

  "jsxBracketSameLine": false, // 在JSX中使用单引号。
  true - Example:
      <button
        className="prettier-class"
        id="prettier-id"
        onClick={this.handleClick}>
        Click Here
      </button>
  false - Example:
      <button
        className="prettier-class"
        id="prettier-id"
        onClick={this.handleClick}
      >
        Click Here
      </button>

  "arrowParens": "avoid",
  // "avoid" - Omit parens when possible. Example: x => x
  // "always" - Always include parens. Example: (x) => x

  // 只格式化文件的一段。(开始于结束的位置)
  "rangeStart": 0,
  "rangeEnd": Infinity,

  // parser: None, // 看文档
  filepath: None, // 指定用于推断要使用哪个分析器的文件名。看文档

  "requirePragma": false, // prettier只能将自己限制为在文件顶部包含特殊注释（称为pragma）的格式文件。

  "insertPragma": false,
  // prettier可以在文件顶部插入一个特殊的@format标记，指定文件已使用prettier格式化。
  // 当与--require pragma选项一起使用时，这很好地工作。
  // 如果文件顶部已经有docblock，则此选项将使用@format标记向其添加新行。

  "proseWrap": "preserve", // 在JSX中使用单引号。
  // 默认情况下，prettier将按原样包装标记文本，因为某些服务使用区分换行符的呈现程序，
  // 例如github comment和bitback。
  // 在某些情况下，您可能希望改用编辑器/查看器软包装，因此此选项允许您选择“从不”退出。

  // “always”——如果超过打印宽度，请将散文包装起来。
  // “never”-不要包装散文。
  // “preserve”—按原样包装散文。

  "htmlWhitespaceSensitivity": "css", // 指定HTML文件的全局空白敏感度
  // “css”-尊重css display属性的默认值。
  // “strict”-空白被认为是敏感的。
  // “ignore”-空白被认为是不敏感的。

  "endOfLine": "auto",
  // “auto”-维护现有的行尾（一个文件中的混合值通过查看第一行后使用的内容来正常化）
  // “lf”–仅限换行（\n），在Linux和MacOS以及Git Repos内部都很常见
  // “crlf”-回车+换行符（\r\n），在Windows上常见
  // “cr”-仅回车字符（\r），很少使用
}
```
