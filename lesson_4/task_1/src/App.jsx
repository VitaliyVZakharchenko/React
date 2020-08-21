import React from 'react';
import Clock from './Clock';

const App = () => {
    return (
        <>
        <Clock start={17} interval={5000}/>
        <Clock start={20} interval={2000}/>
        <Clock start={30} interval={1000}/>
        </>
    );
};

export default App;