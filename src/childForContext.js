import React, {useContext} from 'react';
import counterContext from './CounterContext';
//Here we are using Context {useContext}

const ChildForContext = () => {
    let counterValue = useContext(counterContext);
    
    return(
        <div>
            <h1>Counter Calculator</h1>
            <h3>Context API Counter Value : {counterValue[0]}</h3>
            <button onClick={
                ()=> counterValue[1]( ++counterValue[0] )
            }>
                Increment
            </button>
            <hr />
        </div>
    );
}

export default ChildForContext;

/*
counterValue[1]( ++counterValue[0] ) <==> setCount(++count)

The difference is in last class we use an array here we use a varaible
and we know that; that variable contains an array
*/