# @andyluo/eslint-config

[![npm](https://img.shields.io/npm/v/@andyluo/eslint-config)](https://www.npmjs.com/package/@andyluo/eslint-config)

Extends [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

## Usage

### Install

```bash
pnpm add -D eslint @andyluo/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@andyluo"
}
```

### Config `.eslintignore`

```txt
dist
node_modules
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```