const sequelize = require('./util/database')

const User = require('./models/user')
const Product = require('./models/product')
const Koa = require('koa')
const app = new Koa()
 //注意安装指令：yarn add koa-bodyparser
const bodyParser = require('koa-bodyParser')
app.use(require('koa-static')(__dirname+'/'))
app.use(bodyParser())

const router = require('koa-router')()
Product.belongsTo(User, {
    constrains: true,
    onDelete: 'CASCADE'
})
User.hasMany(Product)
router.get('/', ctx=>{
    ctx.redirect('./frontend/index.html')
    // ctx.body='home'
})
router.post('/admin/product',async ctx=>{
    const body = ctx.requset.body
    const res = await ctx.user.createProduct(body)
    ctx.body = {success:true,res,body}
})
app.use(router.routes())
sequelize.sync().then(async res => {
    let user = await User.findByPk(1)
    console.log(user)
    app.listen(818,()=>{
        console.log('服务器启动：818端口')
    })
})
