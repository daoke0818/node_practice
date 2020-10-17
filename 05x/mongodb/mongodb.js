(async()=>{
    const {MongoClient} = require('mongodb')

    const client = new MongoClient('mongodb://localhost:27017',{
        userNewUrlParser:true
    })
    let ret;
    ret = await client.connect()
    console.log('connect',ret)
})()