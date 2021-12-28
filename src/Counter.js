import React, { useReducer, useState } from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [num, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({type: 'INCREMENT'});
    }

    const onDecrease = () => {
        dispatch({type: 'DECREMENT'});
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}


// function Counter() {
//     const [num, setNum] = useState(0);

//     const onIncrease = () => {
//         setNum(num + 1);
//     }

//     const onDecrease = () => {
//         setNum(num -1);
//     }

//     return (
//         <div>
//             <h1>{num}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }


export default Counter;