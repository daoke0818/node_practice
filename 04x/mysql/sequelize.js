(async () => {
    const Sequelize = require('sequelize')
    // 建立连接
    const sequelize = new Sequelize('daoke_seq', 'root', 'kkbnode', {
        host: 'localhost',
        dialect: 'mysql',
        operatorAliases: false, // 
    })

    const Fruit = sequelize.define('Fruit', {
        name: { type: Sequelize.STRING(20), allowNull: false },
        // name4: { type: Sequelize.STRING(20), allowNull: false },
        price: { type: Sequelize.FLOAT, allowNull: false },
        stock: { type: Sequelize.INTEGER, defaultValue: 0 },
        // 表自动生成自增的id，但这种id在移植时容易出问题，所以最好用uuid
        id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV1,
            primaryKey: true
        }
    }, {
        // 避免自动生成修改和创建的时间戳
        timestamps: false
    })
    // let ret = await Fruit.sync()
    // 无论是否已存在表，都会强制同步
    let ret = await Fruit.sync({ force: true })

    ret = await Fruit.create({
        name: '苹果',
        price: 3.6
    })
    ret = await Fruit.findAll()
    console.log(ret)
})() 