const fs = require('fs')
const rs = fs.createReadStream('./yueguangqu.png')
const ws = fs.createWriteStream('./copy.png')
rs.pipe(ws)
