const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Product = sequelize.define('product',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:Sequelize.STRING,
    description:Sequelize.STRING
});

module.exports = Product