import { useState } from 'react';

export const useArray = (array) => {
    const [array, setArray] = useState(array);

    const set = (newArray) => {
        setArray(newArray);
    };

    const push = (item) => {
        setArray(array => [...array, item]);
    };

    const update = (index, newItem) => {
        const arrayCopy = [...array];
        arrayCopy[index] = newItem;
        setArray(arrayCopy);
    };

    const clear = () => {
        setArray([]);
    }

    const filter = (callback) => {
        setArray(a => a.filter(callback));
    }

    const remove = (index) => {
        const arrayCopy = [...array];
        arrayCopy.splice(index, 1);
        setArray(arrayCopy);
    }
    return {array, set, push, remove, filter, update, clear};
};
