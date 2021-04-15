import React, {useState} from 'react';
import ColorPicker from './ColorPicker.js';
import Button from 'react-bootstrap/Button';

const SwatchCreator = (props) => {
    
    const saveSwatch = () => {    
        const swatch = {
            title: title,
            colors: [color1, color2, color3, color4]
        }
        props.saveSwatch(swatch)
    }

    const resetPicker = () => {
        window.location.reload();
    }

    const [title, setTitle] = useState('');
    const [color1, setColor1] = useState({});
    const [color2, setColor2] = useState({});
    const [color3, setColor3] = useState({});
    const [color4, setColor4] = useState({});
    
    return(
        
        <div>
           <input
           className="name-swatch"
           placeholder="Name Your Swatch" 
           value= {title}
           onChange={(e) => setTitle(e.target.value)}
            /> 
            <div className="select-color" style={{display: 'flex'}}>
                <ColorPicker color={color1} setColor={setColor1} />
                <ColorPicker color={color2} setColor={setColor2} />
                <ColorPicker color={color3} setColor={setColor3} />
                <ColorPicker color={color4} setColor={setColor4} />
            </div>
            
            <Button className="save-btn" onClick={saveSwatch}>Save</Button>
            <Button className="reset-btn" onClick={resetPicker}>Reset</Button>
        </div>
       
        )
}

export default SwatchCreator