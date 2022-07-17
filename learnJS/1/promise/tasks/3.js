// Обработчик finally «пропускает» результат или ошибку дальше,

Promise.resolve()
    .then(() => {
        return "1";
    })
    // .then вернул "1", но .finally пропустит его мимо себя
    .finally(data => {
        console.log(data); // => "undefined"
        return "2";
    })
    // из .finally вернули "2", но результат берется из предыдущего .then или .catch
    .then(data => console.log(data)) // => "1"
