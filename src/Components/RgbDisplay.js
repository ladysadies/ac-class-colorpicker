// Hints: RGB Display, input tags

import React from 'react';

const RgbDisplay = (props) => {
    // console.log(props);
    return(
        
        <div className="display">

            <label>
                {props.label}
            </label>
            <input 
                type="number" 
                min="0" 
                max="255"
                value={props.val}
                onChange={(e) => props.updateColor(e.target.value)}
            />

        </div>
        
        )
}

export default RgbDisplay