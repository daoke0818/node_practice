const obj = {
    info: {
        name: 'daoke'
    },
    get name(){
        return this.info.name
    },
    set name(val){
        this.info.name = val
    }
}

console.log(obj.name)
obj.name = 'daoker'
console.log(obj.name)