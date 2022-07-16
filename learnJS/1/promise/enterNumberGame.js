const executorFunction = (resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const userNumber =  Math.floor(Math.random() * 6 + 1);

    if (userNumber === randomNumber) {
        resolve({value: 2, randomNumber: randomNumber});
    } else if (
        Math.abs(userNumber - randomNumber) === 1
    ) {
        resolve({value: 1, randomNumber: randomNumber});
    } else {
        resolve({value: 0, randomNumber: randomNumber});
    }
}

const continueGame = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        if (randomNumber === 10) {
            resolve(false);
        } else {
            resolve(true);
        }
    })
}

const enterNumber = () => {
    return new Promise(executorFunction);
}

const handleGuess = async () => {
    try {
        const result = await enterNumber();
        console.log(`Dice: ${result.randomNumber}: you got ${result.value} points`);

        let isGame = await continueGame();
        if (isGame) {
            handleGuess();
        } else {
            console.log("Game ends");
        }
    } catch (error) {
        console.log(error)
    }
}


handleGuess();










