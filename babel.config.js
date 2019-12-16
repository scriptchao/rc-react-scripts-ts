/**
 * Created by tony on 2019/2/21
 */

module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "browsers": [
                        ">0.2%",
                        "not dead",
                        "not ie <= 8"
                    ],
                },
            }
        ],
        [
            "@babel/preset-react",
        ],
        [
            "@babel/preset-typescript"
        ]
    ],
    "plugins": [
        ["babel-plugin-macros"],
        ["@babel/plugin-transform-destructuring"],
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-transform-runtime",{
            "corejs": 3
        }],
        ["@babel/plugin-syntax-dynamic-import"],
        ["@babel/plugin-proposal-optional-chaining"],
        ["import",
            {
                "libraryName": "antd",
                "style": true
            }
        ]
    ]
};
