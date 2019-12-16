/**
 * Created by tony on 2019-10-25
 */

process.on('unhandledRejection', err => {
    throw err;
});

const { argv } = require('yargs')

if (!argv.local) { // 本地测试时不需要添加hione模块
    require('../config/homepage');
}

const webpack = require('webpack')
const rimraf = require('rimraf')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const paths = require('../config/paths')
const config = require('../config/webpack.prod.config')

console.log(argv)

if (argv.analyzer) {
    config.plugins.push(new BundleAnalyzerPlugin())
}

rimraf(paths.appBuild, (err) => {
    if (err) {
        throw err
    }

    webpack(config, (err, stats) => {
        if (err) {
            console.log(err)
        } else {

            process.stdout.write(`${stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            })}\n\n`)
        }
    })
})


