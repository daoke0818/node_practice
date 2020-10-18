
const dec = sender => (target, property) => {
    const old = target.prototype[property]
    target.prototype[property] = msg => {
        console.log(`执行类"${target.name}"的方法"${property}"，参数"${msg}"`)
        msg = `{${sender}: ${msg}}` // 给参数加个花边
        old(msg)
    }
}
const decorate = sender => (target,property,descriptor)=>{
    const old = descriptor.value
    descriptor.value = msg =>{
        old('注解方式的装饰器')
        msg = `[${sender} ${msg}]` // 给参数加个方边
        old(msg)
    }
}
class Log {
    @decorate('注解的发送者=》')
    print(msg) {
        console.log(msg)
    }
}

dec('daoke')(Log, 'print') // 优先权高于注解
const log = new Log()
log.print('万般带不去，唯有业随身。')
log.print('hello ts!')

//index_decorate