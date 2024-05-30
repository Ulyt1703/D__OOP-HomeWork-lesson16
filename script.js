class Account {
    constructor(login, email){
        this.login = login
        this.email = email
    }
    getInfo(){
        return `Логін: ${this.login}, email: ${this.email}`
    }
}
let newAccount = new Account("Danya", "danya@gmail.com")
console.log(newAccount)



class User {
    constructor(name, age, followers){
        this.name = name
        this.age = age
        this.followers = followers
    }
    getInfo(){
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    }
}
let mango = new User("Mango", 18, 20)
mango.getInfo()
let poly = new User("Poly", 17, 10)
poly.getInfo()



class Storage {
    constructor(name, category, year){
        this.name = name
        this.category = category
        this.year = year
    }
}
class StorageNew {
    constructor(){
        this.things = []
    }
    addThing(thing){
        this.things.push(thing)
    }
    removeThing(thing){
        return this.things = this.things.filter(oneThing => oneThing !== thing)
    }
    listThing(){
        return this.things
    }
}
let newVar = new StorageNew()
let newThing1 = new Storage("Cucumber", "Vegetables", 2025)
let newThing2 = new Storage("Tomato", "Vegetables", 2025)
let newThing3 = new Storage("Chair", "Furniture", 2027)
newVar.addThing(newThing1)
newVar.addThing(newThing2)
newVar.addThing(newThing3)
newVar.removeThing(newThing2)
console.log(newVar.listThing())