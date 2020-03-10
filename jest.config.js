/**
 * Created by tony on 2020/1/9
 */
module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
  testMatch: [
    "<rootDir>/src/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  collectCoverageFrom: [
    "<rootDir>/src/Main/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/Main/**/*.d.ts"
  ],
  testEnvironment: "jest-environment-jsdom-fourteen",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^(?!.*\\.(js|jsx|ts|tsx|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.(css|less)$"
  ],
  moduleNameMapper: {
    "^.+\\.(css|less)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ]
}
