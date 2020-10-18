import Koa from 'koa'
import koaBody from 'koa-body'
import {get} from '../utils/router-decorator'

const users = [{
    name: 'json',
    age: 2
}]

export default class User {
    @get('/users')
    public list(ctx: Koa.Context) {
        ctx.body = {
            ok: 1,
            data: users
        }
    }
    public add(ctx: Koa.Context) {
        users.push(ctx.request.body)
        ctx.body = { ok: 1 }
    }
}