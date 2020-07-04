import React, { useState } from 'react';

function Visibility() {
    const [visibility, setVisibility] = useState(false)
    return (
        <div className="container">
            <h1>Visibility Toggle</h1>
            <button onClick={() => setVisibility(!visibility)} className="btn btn-dark">{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                    <p>This was hidden but now that you clicked the button you can see it.</p>
                </div>
            )}
        </div>
    );
}

export default Visibility;