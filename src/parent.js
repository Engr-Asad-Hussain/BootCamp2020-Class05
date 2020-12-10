import React from 'react';
import ChildForContext from './childForContext';
import ChildForReducer from './childForReducer';

const Parent = () => {
    return(
        <div>
            <ChildForContext />
            <ChildForReducer />
        </div>
    );
}

export default Parent;