
const promise = new Promise(function(resolve, reject) {
    console.log("1");
    setTimeout(() => {
        resolve("OK");
    }, 5000);
})


promise.then(result => {
    console.log(result)
    console.log("2");
})
