/**
 * @description 微博缓存层
 * @author 
 * 页面访问后，先从缓存中查找，成功，直接返回，
 * 如果缓存中没有，或者缓存过期了，那么在查询数据库，返回数据，并展示到页面，同时再缓存中存一份
 */

const { get, set } = require('./_redis')
const { getBlogListByUser } = require('../services/blog')

// redis key 前缀
const KEY_PREFIX = 'weibo:square:'

/**
 * 获取广场列表的缓存
 * @param {number} pageIndex pageIndex
 * @param {number} pageSize 
 * 缓存按照页面数据特点进行缓存操作
 */
async function getSquareCacheList(pageIndex, pageSize) {
  const key = `${KEY_PREFIX}${pageIndex}_${pageSize}`

  // 尝试获取缓存
//   const cacheResult = await get(key)
//   if (cacheResult != null) {
//     // 获取缓存成功
//     return cacheResult
//   }

  // 没有缓存，则读取数据库
  const result = await getBlogListByUser({ pageIndex, pageSize })

  // 设置缓存，过期时间 1min
//   set(key, result, 60)

  return result
}

module.exports = {
  getSquareCacheList,
}
