import React from 'react';

const Slider = (props) => {
    console.log(props);
    return(
        
        <div className="slidecontainer">

            <label>
                {props.label}
            </label>
            <input 
                type="range" 
                min="0" 
                max="255"
                vaue={props.val}
                onChange={(e) => props.updateColor(e.target.value)}
            />

        </div>
        
        )
}

export default Slider