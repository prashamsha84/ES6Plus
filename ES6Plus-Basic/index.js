//Normal function
function fruitList(){
    return "I like mango."
}
console.log(fruitList())

//Another way 
const fruitLists = function(){
    return "I like grapes"
}
console.log(fruitLists())

//Arrow Function (anonymous function)
 const fruitList = (fruit) => {
    return `I like ${fruit}.`
 }
 console.log(fruitList("Apple"))

 //Arrow Function shortcut
 const fruitList = (fruit, drink) => `I like ${fruit} and mango ${drink}`
 console.log(fruitList("Banana", "juice"))
 
 //Arrow Function  very shortcut when oly one parameter no need of ()
 const fruitList = fruit => `I liike ${fruit}`
 console.log("Sarifa")

 //default parameter   dev='someone'-default paramater when not passed c=value to the function.
 const juniorDev = (dev = 'someone')  => {
console.log (`${dev} is a junior developer.`)
 }
 juniorDev()

//  default parameter challange
 const foodItem = (food = 'something') =>{
    console.log(`I'm going to buy ${food} today.`)
 }
  foodItem('Yoghurt')

//includes (check in the format of boolen)
  let arrayList = [1, 2, 3, 4, 5]
//   console.log(arrayList.indexOf(0))
  console.log(arrayList.includes(1))

// includes challange 
const listofItem = ['flour','baking', 'egge', 'suger', 'butter']
if (listofItem.includes('chacolate')){
    console.log("We are going to make chacolate cake")
}
else
{
    console.log("We can't make chacolate cake")
}

//let & const
 let example = 5;
 example = 10;
 console.log(example) // reassignable

 const example1 = 10;
 example = 20;
 console.log(example1) // not reassignable

 //const in array
 const example2 = []
 example2.push(6)
 console.log(example2)

 //const in object
 const example3 = {}
 example3.firstName = 'Prash'
 console.log(example3)

 //export and import

 import {ex} from './example.js'
  let updatedEx = ex
 updatedEx.push(6)
 console.log(updatedEx)

 //export and import challange
 import{add} from './example.js'
 let sum = add(4,2)
 console.log(sum)

 //padStart() and padEnd()
  let eg = 'Prash'
 //  console.log(eg.padStart(6, 'h'))
    console.log(eg.padEnd(6, 'h'))

 // padStart() and padEnd() Challange
let examples = 'YouTube.com/CodingTutorials360';

console.log(examples.padStart(100).length);
console.log(examples.padEnd(1));    