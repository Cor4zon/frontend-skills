Promise.resolve()
    .then(() => console.log(1))                                 //1
    .then(() => { console.log(2); throw new Error(); })  // 2
    .catch(() => console.log(3))
    .then(() => console.log(4))

Promise.resolve()
    .then(() => console.log(11))                            // 2
    .then(() => { console.log(12); throw new Error(); })   // 12
    .catch(() => console.log(13))
    .then(() => console.log(14))



// 1
// 11
// 2
// 12
// 3
// 13
// 4
// 14
