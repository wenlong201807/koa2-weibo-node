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
  foreignKey: 'userId', // blogs 的userId 对应 users 的 id
})

UserRelation.belongsTo(User, {
  foreignKey: 'followerId',
})

User.hasMany(UserRelation, {
  foreignKey: 'userId',
})

// 三表关联
// 三个表的连表查询与外键没有直接关系，这是数据模型sequelize的特点
Blog.belongsTo(UserRelation, {
  foreignKey: 'userId', // blogs 的userId 对应 users 的 id
  targetKey: 'followerId', // blogs 的id 对应 userRelations 的 fllowerId
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
