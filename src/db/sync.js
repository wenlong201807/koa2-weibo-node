/**
 * @description sequelize 同步数据库
 * @author wenlong
 */

const seq = require('./seq')

require('./model/index')

// 测试连接
seq
  .authenticate()
  .then(() => {
    console.log('auth ok')
  })
  .catch(() => {
    console.log('auth err')
  })

// 执行同步
seq.sync({ force: true }).then(() => {
  // force: true 删掉原来的数据库，重新建立
  console.log('sync ok')
  process.exit()
})

// 将代码构建的数据同步到数据库中
// node src/db/sync.js