const executorFunction = (resolve, reject) => {
    return resolve("Ok");
}

const promise = new Promise(executorFunction);


