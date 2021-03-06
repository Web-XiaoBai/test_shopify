## 安装依赖
* npm install

## 启动本地热更新 =（拷贝+编译）
* npm run dev

## 拷贝 shopify theme文件目录至dist目录
* npm run dev:copy

## 编译 React组件到theme/assets目录
* npm run dev:start

## 启动 shopify本地热更新（需安装shopify-cli，并连接对应shopify店铺）
* cd ./dist
* shopify theme serve

## 推送源码到子仓库
* git subtree push –-prefix=<子目录名> <子仓库地址> 分支

## 目录说明
```
├── README.md（描述文件）
├── gulpfile.js（Gulp执行文件）
├── package-lock.json
├── package.json（项目依赖文件）
├── src
│   ├── assets（开发资源）
│   ├── components（React组件）
│   ├── global（全局公共组件）
│   ├── theme（shopify theme主题目录）
│   └── utils（全局工具方法）
├── webpack.base.js（webpack基础配置）
└── webpack.client.js（webpack开发配置）
```