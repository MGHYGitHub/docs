---
title: Vitepress安装
titleTemplate: Vitepress本地安装调试
editLink: true
# 编辑链接
---

## 1. 前置准备

* [Node.js](https://nodejs.org/) 18 及以上版本。
* **通过命令行界面 (CLI) 访问 VitePress 的终端。**
* **支持Markdown语法的编辑器。**
  * **推荐**[VSCode](https://code.visualstudio.com/) 及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。

**VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：**

```sh
 npm add -D vitepress
```

## 2. 安装向导

**VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：**

```sh
 npx vitepress init
```

**将需要回答几个简单的问题：**

```markdown
 ┌  Welcome to VitePress!
 │
 ◇  Where should VitePress initialize the config?
 │  ./docs
 │
 ◇  Site title:
 │  My Awesome Project
 │
 ◇  Site description:
 │  A VitePress Site
 │
 ◆  Theme:
 │  ○ Default Theme (Out of the box, good-looking docs)
 │  ● Default Theme + Customization
 │  ○ Custom Theme
 └
```

## 3. 文件结构

**如果正在构建一个独立的 VitePress 站点，可以在当前目录 (**`./`) 中搭建站点。但是，如果在现有项目中与其他源代码一起安装 VitePress，建议将站点搭建在嵌套目录 (例如 `./docs`) 中，以便它与项目的其余部分分开。

**假设选择在**`./docs` 中搭建 VitePress 项目，生成的文件结构应该是这样的：

```markdown
 .
 ├─ docs
 │  ├─ .vitepress
 │  │  └─ config.js
 │  ├─ api-examples.md
 │  ├─ markdown-examples.md
 │  └─ index.md
 └─ package.json
```

`docs` 目录作为 VitePress 站点的项目**根目录**。`.vitepress` 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。
