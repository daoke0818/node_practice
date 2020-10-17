const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  // ##BEGIN## 代码已加密

  // 暗号：哈希算法
  const User = sequelize.define('user',{
    name:Sequelize.STRING
  });
  const Product = sequelize.define('product', {
      title: Sequelize.STRING
  })
  Product.belongsTo(User,{
    constraints: true,
    onDelete: 'CASCADE'
  })
  User.hasMany(Product)
  await User.sync()
  await Product.sync()
  // ##END##
  return { User, Product }
} 
