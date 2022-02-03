/**
 * @description 单元测试的用户信息
 * @author wenlong
 */

/**
 * 【特别提醒】cookie 是用户的敏感信息，此处只能是**测试**用户的 cookie
 * 每次测试用户重新登录，都需要更新这里的 cookie // 从浏览器的cookie中获取最新的
 */

module.exports = {
  Z_ID: 1, // 用户表zhangsan的id
  Z_USER_NAME: 'zhangsan',
  Z_COOKIE:
    'weibo.sid=6z-NdrnFX98RJjblDRrU7pATLPnchNtr; weibo.sid.sig=iiJ0fnWEeXnQnSOb7pkgwOlDSaU',

  L_ID: 3, // 用户表lisi的id
  L_USER_NAME: 'lisi',
  L_COOKIE:
    'weibo.sid=6z-NdrnFX98RJjblDRrU7pATLPnchNtr; weibo.sid.sig=iiJ0fnWEeXnQnSOb7pkgwOlDSaU',
}
