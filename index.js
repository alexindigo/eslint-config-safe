var restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
  'root': true,

  'parser': 'babel-eslint',

  'plugins': [ 'import', 'flowtype', 'jsx-a11y', 'react' ],

  'env': {
    // by default it doesn't impose node, browser, or test enviroments
    // should be "turned on" in the respective .eslintrc files in your project
    'browser': false,
    'node': false,
    'jest': false,

    'shared-node-browser': true,
    'commonjs': true,
    'es6': true
  },

  'parserOptions': {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  'settings': {
    'import/ignore': [
      'node_modules'
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: [ '.js', '.json' ]
      }
    }
  },

  // http://eslint.org/docs/rules/
  'rules': {

    // don't allow (non-celebrity) browser globals anywhere
    'no-restricted-globals': ['error'].concat(restrictedGlobals),

    // warnings imported from eslint-config-react-app
    'array-callback-return': 'warn',
    'default-case': [ 'warn', { commentPattern: '^no default$' }],
    'no-dupe-class-members': 'warn',
    'no-empty-pattern': 'warn',
    'no-extra-label': 'warn',
    'no-label-var': 'warn',
    'no-mixed-operators': [ 'warn', {
      groups: [
        [ '&', '|', '^', '~', '<<', '>>', '>>>' ],
        [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
        [ '&&', '||' ],
        [ 'in', 'instanceof' ]
      ],
      allowSamePrecedence: false
    }],
    'no-template-curly-in-string': 'warn',
    'no-unused-labels': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [ 'warn', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }],
    'operator-assignment': [ 'warn', 'always' ],
    'strict': [ 'warn', 'never' ],
    'unicode-bom': [ 'warn', 'never' ],

    // eslint-config-react-app warnings converted into errors
    'no-new-symbol': 'error',
    'no-restricted-syntax': [ 'error',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-self-assign': 'error',
    'no-whitespace-before-property': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],

    // assembled with http://rapilabs.github.io/eslintrc-generator/
    'comma-dangle': [ 'error', 'never' ],
    'no-cond-assign': [ 'error', 'except-parens' ],
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': [ 'error', 'both' ],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': [ 'error', {
      'requireReturn': false,
      'requireReturnDescription': false,
      'prefer': {
        'return': 'return'
      }
    }],
    'valid-typeof': 'error',
    'no-unexpected-multiline': 'error',
    'complexity': [ 'error', 25 ],
    'curly': [ 'error', 'all' ],
    'dot-location': [ 'error', 'property' ],
    'eqeqeq': 'warn',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'warn',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',

    // temporary disabled in favor of `babel/no-invalid-this`
    // 'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-process-env': 'error',
    'no-proto': 'error',
    'no-redeclare': [ 'error', {
      'builtinGlobals': true
    }],
    'no-return-assign': [ 'error', 'except-parens' ],
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': [ 'error', { 'allowShortCircuit': true }],
    'no-useless-call': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'radix': 'error',
    'vars-on-top': 'error',
    'wrap-iife': [ 'error', 'inside' ],
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': [ 'error', {
      'builtinGlobals': true,
      'hoist': 'all',
      'allow': ['name']
    }],
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [ 'error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true }],
    'no-use-before-define': [ 'error', 'nofunc' ],
    'callback-return': 'error',
    'handle-callback-err': [ 'error', '^err' ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'warn',
    'no-sync': 'warn',
    'array-bracket-spacing': [ 'error', 'always', {
      'singleValue': false,
      'objectsInArrays': false,
      'arraysInArrays': false
    }],
    'brace-style': [ 'error', '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [ 'error', {
      'properties': 'never'
    }],
    'comma-spacing': [ 'error', {
      'after': true
    }],
    'comma-style': [ 'error', 'first', {
      'exceptions': {
        'ArrayExpression': true,
        'ObjectExpression': true
      }
    }],
    'computed-property-spacing': [ 'error', 'never' ],
    'eol-last': 'error',
    'func-style': [ 'error', 'declaration' ],
    'id-length': [ 'error', {
      'min': 2,
      'max': 42,
      'properties': 'never',
      'exceptions': [ 'i', 'j' ]
    }],
    'indent': [ 'error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': 2
    }],
    'lines-around-comment': [ 'error', {
      'beforeBlockComment': true,
      'beforeLineComment': true,
      'allowBlockStart': true,
      'allowObjectStart': true,
      'allowArrayStart': true
    }],
    'linebreak-style': [ 'error', 'unix' ],
    'max-nested-callbacks': [ 'error', 3 ],
    'new-cap': [ 'error', {
      'newIsCap': true,
      'properties': false
    }],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'error',
    'no-new-object': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'object-curly-spacing': [ 'error', 'always', {
      'arraysInObjects': false,
      'objectsInObjects': false
    }],
    'operator-linebreak': [ 'error', 'before' ],
    'quote-props': [ 'error', 'consistent-as-needed', {
      'keywords': true,
      'unnecessary': false
    }],
    'quotes': [ 'error', 'single' ],
    'semi-spacing': [ 'error', {
      'after': true
    }],
    'semi': [ 'error', 'always' ],
    'keyword-spacing': [ 'error', { 'before': true, 'after': true }],
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-infix-ops': [ 'error', {
      'int32Hint': true
    }],
    'space-unary-ops': [ 'error', {
      'words': true
    }],
    'spaced-comment': [ 'error', 'always', {
      'exceptions': ['*']
    }],
    'wrap-regex': 'error',
    'arrow-parens': [ 'error', 'always' ],
    'arrow-spacing': [ 'error', {
      'before': true,
      'after': true
    }],
    'constructor-super': 'error',
    'generator-star-spacing': [ 'error', {
      'before': true,
      'after': false
    }],
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-this-before-super': 'error',
    'require-yield': 'error',
    'max-depth': [ 'error', 5 ],
    'max-len': [ 'error', 160, {
      'comments': 120,
      'ignoreUrls': true
    }],
    'max-params': [ 'warn', 4 ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/
    'import/default': 'warn',
    'import/export': 'warn',
    'import/named': 'warn',
    'import/namespace': 'warn',
    'import/no-amd': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-unresolved': [ 'warn', { commonjs: true }],

    // We don't support configuring Webpack using import source strings, so this
    // is always an error.
    'import/no-webpack-loader-syntax': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-equals-spacing': [ 'warn', 'never' ],
    'react/jsx-no-duplicate-props': [ 'warn', { ignoreCase: true }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [ 'warn', {
      allowAllCaps: true,
      ignore: []
    }],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'warn',
    'react/style-prop-object': 'warn',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'warn',
    'flowtype/use-flow-type': 'warn'
  }
};
