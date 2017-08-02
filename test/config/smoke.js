// Tests for the calculator.
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    '../smoke/*spec.js',
    '../smoke/**/*spec.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },
};
