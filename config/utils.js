/*
 * @Author: 托尼
 * @Date: 2020-08-14 11:37:16
 * @LastEditors: 托尼
 * @LastEditTime: 2020-08-14 11:49:17
 */
function getPublicPath(envPublicUrl) {
    if (!envPublicUrl) {
        return '/'
    }

    return envPublicUrl.endsWith('/') ? envPublicUrl : envPublicUrl + '/'
}

module.exports = {
    getPublicPath
}