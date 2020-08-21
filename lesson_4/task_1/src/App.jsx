import React from 'react';
import Counter from './Counter';

const App = () => {
    return (
        <>
        <Counter start={17} interval={5000}/>
        <Counter start={20} interval={2000}/>
        <Counter start={30} interval={1000}/>
        </>
    );
};

export default App;