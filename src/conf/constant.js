/**
 * @description 常量集合
 * @author wenlong
 */

module.exports = {
  // DEFAULT_PICTURE: 'https://dwz.cn/rnTnftZs', // 用户默认头像
  DEFAULT_PICTURE: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=550723927,1346838877&fm=27&gp=0.jpg', // 用户默认头像
  PAGE_SIZE: 5,

  // 正则表达式，匹配 '@昵称 - userName'
  REG_FOR_AT_WHO: /@(.+?)\s-\s(\w+?)\b/g,
}
