
//Templete String
let fName = "Prash"
let lName = "Berry"

const fullName = `${fName} ${lName}`
 console.log (fullName)
 
//  let greeting = 'Hello \n' + 'World'
let greeting =`Hello ${fullName}`
 console.log (greeting)
 document.getElementById("example").innerText = greeting


// Object
const designer = {
    name: 'Prash Berry',
    work: "Designer",
    address: {
        city: "Ktm"
    }
}
console.log(designer.address.city)

// Destructring Object]
//destructer the above object
const {name,work,address:{city}} = designer

console.log(`${name} is a ${work} who works in ${city}`)


// Challanges (DO)
const student = {
    name1: "Prash Berry",
    age: "22",
    project: {
        diceGame:"Two player dice game using Javascript"
    }
}

const {name1, age, project:{diceGame}} = student
// console.log(name1) 
// console.log(age)
// console.log(diceGame)
console.log(`${name1} is ${age} who develop ${diceGame}`)


// Array
let names = ['Prash', 'Sha', 'Berry']
// console.log(names)

//Destracturing Array
let [firstName, middelName, lastName] = ['Prash', 'Sha', 'Berry']
// console.log(firstName)
// console.log(middelName)
// console.log(lastName)
        // OR
        console.log(`${firstName}  ${middelName}  ${lastName}`)


// object literal
function addressMaker(city, state){

    const newAddress = {newCity: city, newState: state} 
    console.log(newAddress)
}
addressMaker('Kathmandu', 'Bafal')

// Challange Ol
function addressMaker(address){
    const newAddress = {
        city: address.city,
        state: address.state,
        country: Nepal
    }
}
addressMaker({city:'Kathmandu', state:'Bafal'})

// destructing address
function addressMaker(address){
    const {city, state} = address
    const newAddress = {
      city,
      state,
      country: "Nepal"
    }
    // console.log(newAddress)
    console.log(`${newAddress.city}, ${state}, ${newAddress.country}`)
}
addressMaker({city:'Kathmandu', state:'Bafal'})


// for loop
let marks = [200, 300, 600]
let total = 0
 for (const mark of marks){
    total += mark
    // console.log(mark)
 }
 console.log(total)

 //prac
 let intro = "Prash Berry"
 for (const char of intro){
    console.log(char)
 }

// Challange for loop 

const students= [
    {name:'Prash', city:'Ktm'},
    {name:'Dip', city:'Bafal'},
    {name:'Sus', city:'Tahachal'}
]
for(const student of students){
console.log(`${student.name} lives in ${student.city}`)
}

//spread operator- wont allow to change the new variable value eevn though new vale is push to older one

//for array
let contact = ['Prash', 'Jass', 'Jenn']
// let personalContact = [...contact]
let personalContact = ["Arm",...contact,"Arti"]
// contact.push("Sans")
// console.log(contact)
 console.log(personalContact)

 //for object

 let person={
    name2:'Prash',
    age: 22,
    city: 'ktm'
 }

//  adding in object
//  person.level ='junior'

//  console.log(person)
 let employee = {
    ...person,
    sallery: 2500,
    position: 'Developer'
 }
  console.log(employee)

  //challange spread operator

const shoppingList = ["eggs", "milk", "butter"];
const shoppingBasket =[...shoppingList, "cheese", "ghee"]
console.log(shoppingBasket)


//rest operator- allow function to take a lot of argument like when u dont know hown many value to be insert.
 function add(...nums){
    // console.log(arguments)
    console.log(nums)
 }
 add(2, 5, 6)



