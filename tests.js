// generic test suite config
var core = require('./index.js');

var ruleIdLength, ruleNoShadow;

// --- add test specific exceptions

// allow `t` for use in test instances
ruleIdLength = core.rules['id-length'];
ruleIdLength[1].exceptions.push('t');

// allow `test` as top level var
ruleNoShadow = core.rules['no-shadow'];
ruleNoShadow[1].allow.push('test');

module.exports = {
  'extends': './index.js',
  'rules': {
    'no-console': 'error',
    'id-length': ruleIdLength,
    'no-shadow': ruleNoShadow
  },
  'env': {
    'jest': true
  }
};
