# KWE

## REPL Environment

-   [TypeScript](https://www.typescriptlang.org/play/)

## How to develop and build

-   克隆当前的项目

```
$ git clone git@https://github.com/kwey/zero.git
```

-   在项目的根目录初始化依赖项

```
$ npm install
```

-   开发方式壹

```
$ npm run dev
# 端口8080
```

-   开发方式贰

```
$ npm run debug
```

-   单元测试

```
$ npm run jest
```

-   e2e 测试

```
先开启服务
$ npm run dev

在新窗口运行e2e
$ npm run e2e
```

-   打包上线

```
$ npm run build
```

-   commit message

```
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动

https://github.com/AlloyTeam/eslint-config-alloy#typescript
```
