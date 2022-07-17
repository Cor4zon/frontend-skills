// Написать функцию с колбеком, которая принимает число с колбеком
// и через секунду выводить в консоль число. Ограничения - для решения задачи
// setTimeout - можно использовать только один раз! Реализовать вывод в консоль
// от 1 до 10 через секунду. Вызываем так (только более большая вложенность):


const boo = (number, callback) => {
    setTimeout(() => {
        console.log(number);
    }, 1000);

}



// Выводим от 1 до 10 через секунду каждый раз.
// Используя Promise. Ограничения - setTimeout и new Promise()
// мы можем вызывать только один раз для решения нашей задачи.
const executorFunction = (resolve, reject) => {
    let number = 1;

    setTimeout((number) => {
        console.log(number++);
    }, 1000);

    if (number < 10) {
        executorFunction();
    }
}

const func = () => {
    return new Promise(executorFunction)
}

func().then(
)
