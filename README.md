# @andyluo/eslint-config

[![npm](https://img.shields.io/npm/v/@andyluo/eslint-config)](https://www.npmjs.com/package/@andyluo/eslint-config)

Extends [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

## Usage

### Install

```bash
npm install eslint @andyluo/eslint-config -D
pnpm add -D eslint @andyluo/eslint-config
```

### Config `.eslint.config.js`

```js
import andyluo from '@andyluo/eslint-config'
export default [
  andyluo,
]
```

### Config `.eslintignore`

```txt
dist
node_modules
```

### package.json

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
