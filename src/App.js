import React, {useState} from 'react';
import Parent from './parent';
import counterContext from './CounterContext';

function App() {
  let countState = useState(0); 
  // countState is an array just like we did in last class.
  // countState is equivalent to [count, setCount]

  return (
    <div>
      <counterContext.Provider value={countState}>
        <Parent />
      </counterContext.Provider>
    </div>
  );
}

export default App;


/*
1. <counterContext.Provider value={2}> This is the actual value that
goes to counterContext variable.
*/