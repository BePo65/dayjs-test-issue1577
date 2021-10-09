module.exports = {
  transform: {},
  roots: [
    'src'
  ],
  testRegex: 'src/(.*?/)?.*?.spec.js$',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*'
  ]
};
