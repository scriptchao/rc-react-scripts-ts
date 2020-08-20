/*
 * @Author: 托尼
 * @Date: 2019-11-21 14:23:18
 * @LastEditors: 托尼
 * @LastEditTime: 2020-08-20 20:58:08
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
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry",
          "corejs": 3,
          "modules": false
        }
      ],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ],
  "plugins": [
    ["@babel/plugin-transform-destructuring"],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
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
