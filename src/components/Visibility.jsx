import React from 'react';

const Visibility = ({ visibility, showHide }) => {
    return ( 
        <div className="container">
            <h1>Visibility Toggle</h1>
            <button onClick={showHide} className="btn btn-dark">{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                    <p>This was hidden but now that you clicked the button you can see it.</p>
                </div>
            )}
        </div>
     );
}
 
export default Visibility;