

module.exports.brackets = (target, property) => {
    const old = target.prototype[property]
    target.prototype[property] = msg => {
        msg = `[${msg}]`
        return old(msg)
    }
}
module.exports.sender = name => (target, property) => {
    // ##BEGIN## 代码已加密 
    // 暗号：回溯算法
    const old = target.prototype[property]
    target.prototype[property] = msg => {
        msg = `${name} : ${msg}`
        return old(msg)
    }

    // ##END##
}
