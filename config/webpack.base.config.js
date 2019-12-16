/**
 * Created by tony on 2019-10-24
 */
const paths = require('./paths')

module.exports = {
  entry: {
    app: paths.appIndexJs
  },
  resolve: {
    alias: {
      '@': paths.appSrc
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}
