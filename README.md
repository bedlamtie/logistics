# Logistics

> 帮朋友做的一个物流官网Demo

**效果预览：(https://bedlamtie.github.io/logistics)**

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Eslint

use `@antfu/eslint-config`

[antfu/eslint-config: Anthony's ESLint config preset (github.com)](https://github.com/antfu/eslint-config)

## Install Dependencies

1. Install Node.js (v18.18.0 or later)
2. Clone this repository
3. Run `npm install` or `pnpm install` to install dependencies

```bash
npm install
# or
# pnpm is a fast, disk space efficient package manager.
pnpm install
```

## Run Locally

```bash
npm run dev
# or
pnpm run dev
```

## TIP

element-plus `v2.8.4` 使用废弃的scss函数（eg: `color.blue()`、`color.green()`、`color.red()`），运行、打包提示警告。

issue: https://github.com/element-plus/element-plus/issues/18306 已经修复，但没有发布新版本。

有强迫症可以安装修复后的开发版：

```bash
pnpm add https://pkg.pr.new/element-plus/element-plus@bd245ca
```
