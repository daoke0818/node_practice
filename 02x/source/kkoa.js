const http = require('http')
class Kkoa {
    listen(...args){
        const server = http.createServer((req,res)=>{
            this.callback(req,res)
        })
        server.listen(...args)
    }
    use(callback){
        this.callback = callback
    }
}
module.exports = Kkoa