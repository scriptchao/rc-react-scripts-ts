/**
 * Created by tony on 2019-10-24
 */
process.env.NODE_ENV = 'development'

process.on('unhandledRejection', err => {
  throw err;
});

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { choosePort } = require('react-dev-utils/WebpackDevServerUtils')
const config = require('../config/webpack.dev.config')
const webpackDevServerConfig = require('../config/devServer.config')

const compiler = webpack(config)

const DEFAULT_PORT = 8888
const HOST = '0.0.0.0'

choosePort(HOST, DEFAULT_PORT).then(port => {
  const devServer = new WebpackDevServer(compiler, webpackDevServerConfig)

  devServer.listen(port, HOST, (err) => {
    console.log(err)
  })
})


