/**
 * Created by tony on 2019-10-25
 */
const paths = require('../config/paths')

module.exports = {
  compress: true,
  hot: true,
  historyApiFallback: true,
  // quiet: true,
  clientLogLevel: 'none',
  allowedHosts: [
    '.yangtuojia.com',
    '.hipac.cn'
  ],
  contentBase: paths.appPublic // 静态资源目录
}
