import React, {useState} from 'react';
import ColorPicker from './ColorPicker.js';
import Button from 'react-bootstrap/Button';

const SwatchCreator = (props) => {
    const initialState = { ...props };
    
    console.log(initialState);
    
    const saveSwatch = () => {
        const swatch = {
            title: title,
            description: description,
            colors: [color1, color2, color3, color4]
        }
    }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    const [color3, setColor3] = useState('');
    const [color4, setColor4] = useState('');
    
    return(
        
        <div>
           <input 
           placeholder="Swatch Name" 
           value= {title}
           onChange={(e) => setTitle(e.target.value)}
            /> 
            <div style={{display: 'flex'}}>
                <ColorPicker color={color1} setColor={setColor1} />
                <ColorPicker color={color2} setColor={setColor2} />
                <ColorPicker color={color3} setColor={setColor3} />
                <ColorPicker color={color4} setColor={setColor4} />
            </div>
            

            {/* <Button onClick={saveSwatch} >Save</Button> */}
        </div>
       
        )
}

export default SwatchCreator