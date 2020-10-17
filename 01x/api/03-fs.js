const fs = require('fs')
// 同步读取
const res = fs.readFileSync('./conf.js')
// 无论什么格式文件，都会读取为Buffer的二进制格式
console.log('res',res); // res <Buffer 6e 61 6d 65 3a 20 22 64 61 6f 6b 65 72 22>
// toString方法可以输出人能认识的字符串
console.log('res2',res.toString()); // res name: "daoker"
// 异步读取
const res3 = fs.readFile('./conf.js',(err,data)=>{
    if(err) throw err
    console.log('res3',data.toString())
});
// 异步转化为同步的方法，刚写完总是报错，重新开启几遍terminal突然发现正常了！
(async ()=>{
    const {promisify} = require('util')
    const fs = require('fs')
    const readFile = promisify(fs.readFile)
    const res4 = await readFile('./conf.js')
    console.log('res4 await读取',res4.toString())
})()