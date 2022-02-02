/**
 * @description 数据模型入口文件
 * @author wenlong
 */

const User = require('./User')
const Blog = require('./Blog') // 每次新增一个数据库表，都需要重新导入到数据库中，需要执行 node src/db/sync.js
const UserRelation = require('./UserRelation')
const AtRelation = require('./AtRelation')

// 外键关联:一个用户可以有多条微博内容
// 查用户的时候查询出对应的微博
Blog.belongsTo(User, {
  foreignKey: 'userId',
})

UserRelation.belongsTo(User, {
  foreignKey: 'followerId',
})

User.hasMany(UserRelation, {
  foreignKey: 'userId',
})

Blog.belongsTo(UserRelation, {
  foreignKey: 'userId',
  targetKey: 'followerId',
})

Blog.hasMany(AtRelation, {
  foreignKey: 'blogId',
})

module.exports = {
  User,
  Blog,
  UserRelation,
  AtRelation,
}
