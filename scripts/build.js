/**
 * Created by tony on 2019-10-25
 */
process.env.NODE_ENV = 'production'

process.on('unhandledRejection', err => {
  throw err;
});

const {argv} = require('yargs')

const webpack = require('webpack')
const rimraf = require('rimraf')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
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


