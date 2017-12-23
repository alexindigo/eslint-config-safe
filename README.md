# eslint-config-safe

## Install

```
npm install --save-dev eslint-config-safe
```

## Usage

### With Create-React-App

Create `.eslintrc` file with

```json
{
  "extends": "safe/browser",
  "rules": {
    "custom": ["rules", "per", "project", "or", "environment"]
  }
}
```

### For your node projects

Create `.eslintrc` file with

```json
{
  "extends": "safe/node",
  "rules": {
    "custom": ["rules", "per", "project", "or", "environment"]
  }
}
```

Also you can add environment specific `.eslintrc` for the `server` folder of your project. Eslint will automatically take it into account analyzing that folder. In that case it would make sense to have browser (react) specific `.eslintrc` inside your `src` folder.

### For your Jest tests

Put `.eslintrc` file into your `tests` folder

```json
{
  "extends": "safe/jest",
  "rules": {
    "custom": ["rules", "per", "project", "or", "environment"]
  }
}
```

## For projects not based on Create-React-App

If you want to use this ESLint configuration in a project not built with Create-React-App, you can install it with following steps.

First, install this package, ESLint and the necessary plugins.

```
npm install --save-dev eslint-config-safe@latest babel-eslint@^8 eslint@^4 eslint-plugin-flowtype@^2 eslint-plugin-import@^2 eslint-plugin-jsx-a11y@^6 eslint-plugin-react@^7
```
