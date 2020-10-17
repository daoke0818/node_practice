const Sequelize = require('sequelize')
const conf = require('./conf')

const sequelize = new Sequelize(conf.database,conf.username,conf.password,{
    dialect: 'mysql',
    host: conf.host,
    // operatorsAliases: false // 不使用别名
})

module.exports = sequelize;

