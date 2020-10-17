const http = require('http')
const Kkoa = require('./kkoa')
const app = new Kkoa()

app.use((req, res)=>{
    res.writeHead(200)
    res.end('my KOA')
})

app.listen(819,()=>{
    console.log('监听端口819')
})

module.exports = Kkoa