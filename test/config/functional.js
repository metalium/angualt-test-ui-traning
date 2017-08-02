// Tests for the calculator.
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    '../functional/*spec.js',
    '../functional/**/*spec.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },
};
