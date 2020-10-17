// 使用alloc在内存中开辟8个字节的空间
const buf1 = Buffer.alloc(8)
console.log({buf1}) //<Buffer 00 00 00 00 00 00 00 00>

// 从字符串a生成Buffer，返回值是a的asc码的十六进制
const buf2 = Buffer.from('a')
console.log({buf2}) //<Buffer 61>

const buf3 = Buffer.from('中文')
// 默认的Buffer是utf-8的变长编码
console.log({buf3}) //<Buffer e4 b8 ad e6 96 87>

// 合并Buffer
const buf4 = Buffer.concat([buf2,buf3])
console.log({buf4},buf4.toString()) //<Buffer 61 e4 b8 ad e6 96 87> a中文










