var a = 5;

setTimeout(function timeout() {
    console.log(a);
    a = 10;
}, 0);

var p = new Promise(function(resolve, reject) {
    console.log(a); // 5 (1)
    a = 25;
    resolve();
});

p.then(function(){
    // some code
});

// 25
// 25
// 5

console.log(a); // 25 (2)
