// let promise = new Promise(function(resolve, reject) {

// })


let promise = new Promise(function(resolve, reject) {
    // function executor 
    let i = Math.random(1)*100;
    console.log(i);
    
    (i > 50) ? setTimeout(() => resolve("done"), 1000) :
        reject("nope");
})

promise.then(
    result => console.log(result)
).catch(
    error => console.log(error)
)
// console.log(promise);