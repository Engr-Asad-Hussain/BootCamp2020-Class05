import React, {createContext} from 'react';
//Here we are creating Context {createContext}

const counterContext = createContext(100);
// Here 100 is the backup value; if we donot provide any value it works fine.

export default counterContext;

// This file is like a global centralized location