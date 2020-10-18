import KoaRouter from 'koa-router'

const router = new KoaRouter()

export const get = (path: String) => {
    return (target, property) => {
        router['get'](path, target[property])

    }
}