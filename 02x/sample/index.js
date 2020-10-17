const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
    const start = Date.now()
    next()
    const end = Date.now()
    console.log(`请求${ctx.url} 耗时${end - start}毫秒`)
})
app.use((ctx, next) => {
    const expire = Date.now() + 100
    while (Date.now() < expire) { }
    ctx.body = {
        name: 'daoke_koa2'
    }
})

app.listen(818, () => {
    console.log('server start at 818...')
})