//promises
const buyFlightTickets = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const error = false
            if(error){
                reject('Sorry your payment was not sucessful.')
            }
            resolve('Thank you for booking.')

        },3000)
    })
}

 buyFlightTickets()
 .then((success) => console.log(success))
 .catch((error) => console.log(error))

//  Promises - Challenge

const userData = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = false
        if(error){
            reject('Sorry for inconvinance.')
        }
        else{
            resolve('Here the user data you are looking for.')
        }
    },3000)
    })


userData()
.then((sucess)=>console.log(sucess))
.catch((error)=>console.log(error))

//challange2

const userDatas = new Promise((resolve, reject) => {
    const error = false;
    
    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Prash',
            age: 23,
            email: 'Prash84@gmail.com'
        });
    }
});
userDatas
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

//fetch -get
// RESTFul API - https://jsonplaceholder.typicode.com/
//   Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  fetch('https://jsonplaceholder.typicode.com/comments/1')  
  .then( response=> response.json())
//   .then (json => console.log(json))
  .then (data => console.log(data))

//fetch -post
fetch('https://jsonplaceholder.typicode.com/comments',{
    method:'POST',
    body: JSON.stringify({
        postId:1,
        name:'Prash',
        email:'prash@gmail.com',
        body: 'That was dope!'
    })
})
.then( response=> response.json())
//   .then (json => console.log(json))
  .then (data => console.log(data))


  //fetch-challange
fetch('https://jsonplaceholder.typicode.com/comments/1')
.then((response)=> response.json())
.then((data) => console.log(data))


fetch('https://jsonplaceholder.typicode.com/comments',{
    method : 'POST',
    body :JSON.stringify({
        postId:1,
        name:'Prash Berry',
        email: 'prash@gmail.com',
        body: 'Very good'
        
    })
    
})
.then((response)=> response.json())
.then((data) => console.log(data))

//Async & Await
const photo = []
async function photoUpload(){
    let uploadStatus = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            photo.push('Profile Pic')
            resolve('Photo uploaded sucessfully')
        },3000)
    })

    let result = await uploadStatus
    console.log(result)
    console.log(photo.length)
}
photoUpload()

//Challenge - Async & Await
const apiUrl = "https://api.chucknorris.io/jokes/random";

async function joke(){
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    console.log(data.value)
}
joke()

// Sets
const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(5).add(17);
console.log(exampleSet.delete(5));
console.log(exampleSet.has(5));

exampleSet.clear();

console.log(exampleSet.size);

