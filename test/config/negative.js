// Tests for the calculator.
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    '../negative/*spec.js',
    '../negative/**/*spec.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },
};
