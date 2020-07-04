import React, { useState } from 'react';

function Incrementer() {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <h1>Incrementer</h1>
            <h2>Value: {count}</h2>
            <button onClick={() => setCount(count + 1)} className="btn btn-success">Increment</button>
            <button onClick={() => setCount(count - 1)} className="btn btn-danger">Decrement</button>
        </div>
    );
}

export default Incrementer;