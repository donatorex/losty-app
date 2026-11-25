/** @type {import("jest").Config} */
module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/test/svg-mock.tsx',
  },
};
