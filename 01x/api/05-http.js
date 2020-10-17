// 四行代码一个服务器
const http = require('http')
// res是一个继承了OutgoingMessage、Stream、EventEmitter的对象，
// 实际上控制的是数据流，.end()方法是结束流
// req是继承了Readable、Stream、EventEmitter的对象，也是数据流
const fs = require('fs')
const server = http.createServer((req, res) => {
    // 页面访问一次这里才会执行
    console.log('请求了一次')
    // console.log('res的原型链', getPrototypeChain(res))
    // console.log('req的原型链', getPrototypeChain(req))
    // res.end('hello world node')
    const { url, method, headers } = req
    if (url === '/' && method === 'GET') {
        fs.readFile(Math.random() > .4 ? './index.html' : './index123.html', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' })
                res.end('500 服务器错误，我们的攻城狮正在加班修复~~')
                // 如果没有这个return，服务器发生错误后就会奔溃
                return
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end(data)
        })
        // 模拟写个接口
    } else if(url==='/user'&&method==='GET'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({name:'daoker'}))
    } else if(method==='GET'&&headers.accept.includes('image/*')){
        fs.createReadStream('.'+url).pipe(res)
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('<h3>404 网页找不到</h3><p>你要找的页面被外星人劫持了^_^</p>')
    }
    // 读取图片时，如果直接写到data里，图片越大同时请求客户越多则耗费内存越多

})
// 监听端口
server.listen(818)

// 打印原型链
const getPrototypeChain = (obj) => {
    const protoChain = []
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain
}