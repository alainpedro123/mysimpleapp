import React from 'react';

const Incrementer = ({ count, increment, decrement }) => {
    return (
        <div className="container">
            <h1>Incrementer</h1>
            <h2>Value: {count}</h2>
            <button onClick={increment} className="btn btn-success">Increment by 1</button>
            <button onClick={decrement} className="btn btn-danger">Decrement by 1</button>
        </div>
    );
}

export default Incrementer;