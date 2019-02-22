# eslint-config-safe

## Install

```
npm install --save-dev eslint-config-safe
```

## Usage

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
