import React, { useEffect, useState } from 'react';
import Slider from './Slider.js';
import Card from 'react-bootstrap/Card';
import RgbDisplay from './RgbDisplay.js';

const Colorpicker = ({setColor}) => {
    const [red, updateRed] = useState("128");
    const [green, updateGreen] = useState("128");
    const [blue, updateBlue] = useState("128");

    useEffect( () => {
        updateRed(red)
        updateGreen(green)
        updateBlue(blue)
        setColor({r: red, g: green, b:blue})
    },[red, green, blue, setColor])

    return(
        <div className="color-cards">
            <Card style={{width: '10em', border: "none", display: "flex", alignItems: "center"}}>
                <Card.Body style={{backgroundColor: "whitesmoke", borderRadius: "10px", border: "3px solid black"}}>
                <Slider
                    className="slidey-slider"
                    label = "R"
                    val = {red}
                    updateColor = {updateRed}
                />

                <Slider 
                    label = "G"
                    val = {green}
                    updateColor = {updateGreen}
                />

                <Slider 
                    label = "B"
                    val = {blue}
                    updateColor = {updateBlue}
                />

                <br/>
                <div className="circles" style={{backgroundColor: `rgb(${red},${green},${blue})`, marginLeft: 'auto', marginRight: 'auto'}}></div>
                <br/>
                <RgbDisplay 
                    label ="R"
                    val = {red}
                    updateColor = {updateRed}
                />
                
                <RgbDisplay
                label = "G"
                val = {green}
                updateColor = {updateGreen} 
                />

                <RgbDisplay 
                label = "B"
                val = {blue}
                updateColor = {updateBlue}
                />

                </Card.Body>
            </Card>

        </div>
        )
}

export default Colorpicker