# eslint-plugin-typescript-formatter

[![npm version](https://img.shields.io/npm/v/eslint-plugin-typescript-formatter.svg?maxAge=2592000)](https://www.npmjs.com/package/eslint-plugin-typescript-formatter)
[![GitHub issues](https://img.shields.io/github/issues/witcher112/eslint-plugin-typescript-formatter.svg)](https://github.com/witcher112/eslint-plugin-typescript-formatter/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/witcher112/eslint-plugin-typescript-formatter/blob/main/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/witcher112/eslint-plugin-typescript-formatter/badge.svg)](https://snyk.io/test/github/witcher112/eslint-plugin-typescript-formatter)

TypeScript built-in formatter for ESLint

## Table of contents

- [eslint-plugin-typescript-formatter](#eslint-plugin-typescript-formatter)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Credits](#credits)

## Installation

npm:

```shell
npm install --save-dev eslint-plugin-typescript-formatter
```

yarn:

```shell
yarn add -D eslint-plugin-typescript-formatter
```

## Configuration

Modify your `.eslintrc.json` file to include:

```json
{
  "plugins": [
    "typescript-formatter"
  ],
  "rules": {
    "typescript-formatter/format": [
      "warn",
      {
        "baseIndentSize": 0,
        "indentSize": 2,
        "tabSize": 2,
        "newLineCharacter": "\n",
        "convertTabsToSpaces": true,
        "indentStyle": 2,
        "trimTrailingWhitespace": true,
        "insertSpaceAfterCommaDelimiter": true,
        "insertSpaceAfterSemicolonInForStatements": true,
        "insertSpaceBeforeAndAfterBinaryOperators": true,
        "insertSpaceAfterConstructor": false,
        "insertSpaceAfterKeywordsInControlFlowStatements": true,
        "insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
        "insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
        "insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
        "insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
        "insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false,
        "insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
        "insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
        "insertSpaceAfterTypeAssertion": false,
        "insertSpaceBeforeFunctionParenthesis": false,
        "placeOpenBraceOnNewLineForFunctions": false,
        "placeOpenBraceOnNewLineForControlBlocks": false,
        "insertSpaceBeforeTypeAnnotation": false,
        "indentMultiLineObjectLiteralBeginningOnBlankLine": false,
        "semicolons": "insert"
      }
    ]
  }
}
```

Rule options schema is available in [TypeScript source code](https://github.com/microsoft/TypeScript/blob/4076ff8fd6c91c07f6baefa0843e22e33168e164/src/server/protocol.ts#L3427).

## Credits

* [vvakame/typescript-formatter](https://github.com/vvakame/typescript-formatter)
* [ghaschel/eslint-plugin-js-beautify-html](https://github.com/ghaschel/eslint-plugin-js-beautify-html)
