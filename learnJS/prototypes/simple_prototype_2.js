const animal = {
    eats: true,
};

const cat = {
    mew() {
        console.log('mew');
    },
    __proto__: animal,
};

const bengal = {
    mew() {
        console.log('mur mao');
    },
    __proto__: cat,
};

const abyssin = {
    color: 'orange',
    __proto__: cat,
};