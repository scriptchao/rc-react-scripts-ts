/**
 * Created by tony on 2019-11-07
 */
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
            flexbox: 'no-2009',
        }),
    ]
}
