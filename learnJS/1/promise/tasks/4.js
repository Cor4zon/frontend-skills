Promise.resolve()
    .then(() => console.log(1))  // "Первый"
    .then(() => console.log(2))  // "Третий"

Promise.resolve()
    .then(() => console.log(11)) // "Второй"
    .then(() => console.log(12)) // "Четвертый"
