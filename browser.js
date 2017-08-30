module.exports = {
  'extends': './index.js',
  'rules': {
    "prefer-const": 'warn',
    "prefer-spread": 'warn',
    "no-console": 'warn',

    "no-var": 'error',
    "camelcase": [
      'error', {
        "properties": "never"
      }
    ],
    // don't force new syntax in node, until it fully settled with new features
    'object-shorthand': ['error', 'consistent-as-needed']
  },
  'env': {
    'browser': true
  }
};
