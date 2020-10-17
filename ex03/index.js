const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
        // ##BEGIN## 代码已加密 暗号：二分查找
        readStream.on('data', data => {
            // const ret = JSON.parse(data.toString())
            reqData.push(data)
            size += data.length
            console.log('~~', data, size)
        })
        readStream.on('end', () => {
            const data = Buffer.concat(reqData,size)
            resolve(JSON.parse(data.toString())) 
        })
        // ##END##
    })
}
