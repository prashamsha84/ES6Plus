// class
import { Animal, Cat } from './animal.js'
// let cat = new Animal ('Cat', 4)
let cat = new Cat ('Cat', 4)
// console.log(cat)
// cat.legs = 3
// console.log(cat.legs)
// cat.makeNoise('Meowe')
// console.log(cat.type)
console.log(cat.metaData)
cat.makeNoise()
//static
//  console.log(Animal.return10())

//class challange

class Player {
    constructor(name, country){
        this.name = name
        this.country = country
    }
    getDetails(){
        console.log(`${this.name} was born in ${this.country}`)
    }
}

const details = new Player('Messi', 'Argintina')
details.getDetails()

//extend class challange

class tennisPalyer extends Player{
    constructor(name, country, age){
    super(name, country)   
    this.age = age
    }

    tannisDetails(){
       console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`)
    }
}
const tannisPD = new tennisPalyer('Rafell', '23')
tannisPD.tannisDetails()