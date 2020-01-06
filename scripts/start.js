/**
 * Created by tony on 2019-10-24
 */
process.env.NODE_ENV = 'development'

process.on('unhandledRejection', err => {
  throw err;
});

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.dev.config')
const webpackDevServerConfig = require('../config/devServer.config')

const compiler = webpack(config)

const devServer = new WebpackDevServer(compiler, webpackDevServerConfig)
devServer.listen(8888, (err) => {
  console.log(err)
})


