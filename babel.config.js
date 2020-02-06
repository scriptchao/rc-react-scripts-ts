/**
 * Created by tony on 2019/2/21
 */
const isEnvTest = process.env.NODE_ENV === 'test'

module.exports = {
  "presets": [
    isEnvTest ?
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current",
          }
        }
      ] :
      ["@babel/preset-env"],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ],
  "plugins": [
    ["@babel/plugin-transform-destructuring"],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    isEnvTest ? false :
      ["@babel/plugin-transform-runtime", {
        "corejs": 3,
      }],
    ["@babel/plugin-syntax-dynamic-import"],
    ["@babel/plugin-proposal-optional-chaining"],
    ["import",
      {
        "libraryName": "antd",
        "style": true
      }
    ]
  ].filter(item => !!item)
};
