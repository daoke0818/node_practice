const { resolve } = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
    console.log({ path })
    const list = fs.readdirSync(path)
    // console.log(list);

    // ##BEGIN## 代码已加密
    // 这格式要命了，一点不对就不能通过！——暗号：递归
    return `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
${list.map(file =>
        `{
    path: '/${file.replace('.vue', '')}',
    name: '${file.replace('.vue', '')}',
    component: () => import('./views/${file}')
},
`).join('')}
    ]
})`


    // ##END##
}

