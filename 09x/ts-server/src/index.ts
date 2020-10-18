import * as Koa from 'koa'
import * as bodify from 'koa-body'
import Users from './routes/user'
// import * as serve from 'koa-static'
// import * as timing from 'koa-time'


const app = new Koa()

// app.use(timing())
// app.use(serve(`${__dirname}/public`))

app.use(
    bodify({
        multipart:true,
        // 使用严格模式，解析delete请求的请求体
        strict:false
    })
)

/* app.use((ctx = Koa.Context)=>{

}) */
// const router = new Router()
// router.get('/abcd',ctx=>{
//     ctx.body = 'abcd'
// })

// app.use(router.routes())
// app.use(Users)

app.listen(3000,()=>{
    console.log('服务器启动成功')
})