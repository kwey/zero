
module.exports = {
  "verbose": true,
  "roots": ["<rootDir>/test"],
  // "testRegex": "(/__tests__/*.(ts|js)$",
  // "transform": {
  //   ".ts": "ts-jest"
  // },
  "transform": {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  // "testRegex": "/__tests__/.*\\.(ts|tsx|js)$",
  "testEnvironment": "jsdom",
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "coverageDirectory": "<rootDir>/test/coverage",
  "coveragePathIgnorePatterns": [
    "/src/metadata.ts",
    "/node_modules/",
    "/test/"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 95,
      "lines": 95,
      "statements": 95
    }
  },
  "collectCoverageFrom": [
    "src/*.{js,ts}"
  ]
}
