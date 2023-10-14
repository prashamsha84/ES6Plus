//class
export class Animal {
    constructor(type, legs){
        this.type = type
        this.legs = legs
    }
    //function in class
    makeNoise(Sound = 'Loud Noise'){
        console.log(Sound)
    }
    //get
    get metaData (){
        return `Type: ${this.type}, Legs: ${this.legs}`
    }
    //static means no need of instances
     static return10(){
     return 10
     }
}

//export parent class, class- extends
export class Cat extends Animal{
    makeNoise( sound= 'Meowe'){
        console.log(sound)
    }
}

