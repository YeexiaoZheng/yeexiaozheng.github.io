---
title: 实验报告
date: 2024-04-19 22:34:39
categories: [ 实验报告 ]
tags: [ 实验报告 ]
---

本次实验是关于如何使用 Hexo 搭建个人博客。Hexo 是一个基于 Node.js 开发的快速、简洁且功能丰富的静态博客框架。它允许用户使用 Markdown 编写文章，并通过简单的命令将其转换为静态网页。

Hexo 的优势包括：

1. 简单易用：Hexo 的安装和配置非常简单，无需太多专业知识。
2. 高效快速：由于 Hexo 是基于静态网页生成的，因此在网站访问速度上表现出色。同时，Hexo 在生成静态页面时速度很快，即使在文章较多的情况下也能保持高效率。
3. 多主题和插件支持：Hexo 提供了丰富的主题和插件，用户可以根据自己的喜好和需求进行选择和定制，打造独具特色的博客。
4. Markdown 写作：Hexo 支持使用 Markdown 格式编写文章，Markdown 是一种简单易懂的标记语言，让用户专注于内容创作而无需过多关注排版。
5. Git 版本管理：Hexo 可以轻松与 Git 集成，使用户可以使用版本控制管理博客内容，方便多人协作和备份。
6. 丰富的功能：Hexo 不仅仅是一个静态博客生成器，还提供了标签、分类、RSS 订阅等许多有用的功能，使用户可以更好地管理和展示自己的内容。

接下来，我将详细介绍如何使用 Hexo 搭建个人博客。

## 准备工作

### 1. 安装 node.js

- 下载网址：[https://nodejs.org/en/download](https://nodejs.org/en/download)
- 安装完成后，打开终端，输入 `node -v`、`npm -v` 查看版本信息。

### 2. 安装 git

- 下载网址：[https://git-scm.com/download/win](https://git-scm.com/download/win)
- 安装完成后，打开终端，输入 `git --version` 查看 Git 版本信息。
- 配置用户名和邮箱 `git config --global user.name xxx` `git config --global user.email xxx@xx.com`

## Hexo 搭建个人博客

1. 进入文件夹任意位置，点开 git bash，输入以下命令：

```bash
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo s
```

2. 输入`hexo s`，如果出现`INFO Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.`，则表示创建成功，点开链接将会看到你初始化的博客界面。

3. 接下来就可以去寻找自己喜欢的主题模板，构建属于自己的个性化博客界面了。

## Hexo 主题设置

本次实验我使用的是shokaX主题，这是一款由shoka改版而来的的一个二次开发版，shokaX使用了typescript+Vue 3+Pug的技术搭配，获得了更高的性能。

在hexo初始化好仓库后，使用shokaX官方推荐的cli安装shokaX：

```bash
npm i shokax-cli --location=global
# hexo init 初始化环境
SXC install shokaX
```

安装完成后根据官方提供的教程进行配置：

[https://docs.kaitaku.xyz/guide/#%E9%85%8D%E7%BD%AE%E4%B8%BB%E9%A2%98](https://docs.kaitaku.xyz/guide/#%E9%85%8D%E7%BD%AE%E4%B8%BB%E9%A2%98)

## Hexo 部署到 github

1. 在 github 新建一个名为`yeexiaozheng.github.io`的仓库，注意前缀要和自己 github 账号的名字相同，否则可能会报错。

2. 进入 _config.yml 文件，找到 deploy 部分，更改其中的内容如下所示 deploy

```yml
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: https://github.com/YeexiaoZheng/yeexiaozheng.github.io
  branch: gh-pages
```

3. 安装 git 部署命令工具`npm install hexo-deployer-git --save`

4. 最后输入以下命令：

```bash
hexo clean
hexo g
hexo d
```

hexo clean清除之前生成的东西，hexo generate生成静态文章，hexo deploy部署博客。