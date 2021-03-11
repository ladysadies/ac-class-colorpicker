import React, { useState } from 'react';

const CardButton = () => {
    const [toggle, setToggle] = useState(true)

        
        // state = {isToggleOn: true};
        // // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
      
    
      const handleClick = () => {
        setToggle(state => ({
          toggle: !state.isToggleOn
        }));
        console.log(this.props)
      }
    
    
        return (
            <div>
                
            </div>
        )
     

}

export default CardButton;