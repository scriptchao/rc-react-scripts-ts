/**
 * Created by tony on 2019-10-24
 */
const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd());


module.exports = {
  appDirectory,
  appSrc: path.join(appDirectory, 'src'),
  appBuild: path.join(appDirectory, 'build'),
  appIndexJs: path.join(appDirectory, 'src/index'),
  appPublic: path.join(appDirectory, 'public'),
  appHtml: path.join(appDirectory, 'public/index.html'),
  appPackageJson: path.join(appDirectory, 'package.json'),
}
