import React, { useState } from 'react';
import { useDebounce } from "./useDebounce";

const DebounceComponent = () => {
    const [ count, setCount ] = useState(10);
    useDebounce(() => console.log(count), 1000, [ count ]);

    return (
        <div>
            <div>{ count }</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
};
