import React, {useReducer} from 'react';
import counterReducer from './CounterReducer';

const ChildForReducer = () => {
    let [state, dispatch] = useReducer(counterReducer, 1);
    /*
    [state, dispatch] this is known as we are destucturing means
    whatever is on right hand side is decoded into 2 variables.
    */
    /*
    Here 1 is the by default value. Just like we pass in CounterContext.js
    */
    return(
        <div>
            <h3>Reducer Counter Value: {state}</h3>
            <button onClick={
                ()=> dispatch('INCREMENT')
            }>
                Increment
            </button>
        </div>
    )
}

export default ChildForReducer;