/**
 * Created by tony on 2020/1/9
 */
module.exports = {
  setupFiles: [
    "<rootDir>/src/__test__/setup.ts"
  ],
  testMatch: [
    "<rootDir>/src/__test__/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  collectCoverageFrom: [
    "<rootDir>/src/Main/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/Main/**/*.d.ts"
  ],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
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
