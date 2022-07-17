Promise.resolve()
    .then(() => {
        throw new Error('Api Error');
    })
    .catch((error) => {
        console.log(error);
    })

setTimeout(() => {
    console.log('setTimeout'); // => "setTimeout"
}, 1000);
