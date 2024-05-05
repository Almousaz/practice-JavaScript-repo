//  Call back function Sequence

// function myDisplayer(some){
//     document.getElementById("demo").innerHTML = some ;
// }



// function myFirst() {
//     myDisplayer("Hello");
// }

// function mySecond(){
//     myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();
// // 

// mySecond();
// myFirst();


// Asynchronous JavaScript
// setTimeout

// setTimeout(myFunction , 3000);
// function myFunction(){
//     document.getElementById("demo").innerHTML = "I love You !"
// }
// way 2
// setTimeout(() => {
//     document.getElementById("demo").innerHTML = "I love You !"
// }, 3000);



// setInterval
// setInterval(() => {
//     let d = new Date();
//     document.getElementById("demo").innerHTML =
//     d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// }, 1000);


// example using promise

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

// let myPromise = new Promise((resolve, reject) => {
//     let x = 0;
//     if(x == 0){
//         resolve("OK");
//     }else{
//         reject("Error");
//     }
// });
// myPromise.then(function(value){myDisplayer(value);},
// function(error){myDisplayer(error);});

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("IloveYou!!")
//     }, 3000);
// });
// myPromise.then(function(value){
//     document.getElementById("demo").innerHTML = value;
// });

//  async and await

function makeRequest(location){
    return new Promise((resolve,reject) => {
        console.log(`making request to ${location}`)
        if (location === 'Google'){
            resolve('Google says hi')
        }else {
            reject('we can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('Responsive Received')
//     return processRequest(response)
// }).then(processResponse => {
//     console.log(processResponse)
// }).catch(err => {
//     console.log(err)
// })

 async function doWork(){

    try {
        const response  = await makeRequest('Google')
        console.log('Response Received')
        const processResponse = await processRequest(response)
        console.log(processResponse)
    } catch(err) {
        console.log(err)
    }
    
 } 
 doWork()