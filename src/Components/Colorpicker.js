import React, { useState } from 'react';
import Slider from './Slider.js';
import Card from 'react-bootstrap/Card';

const Colorpicker = () => {
    const [red, updateRed] = useState("128");
    const [green, updateGreen] = useState("128");
    const [blue, updateBlue] = useState("128");

    return(
        <div>
            <Card style={{width: '10em', border: "none", display: "flex", alignItems: "center"}}>
                <Card.Body style={{backgroundColor: "rgb(255,127,80,0.5)", borderRadius: "10px", border: "3px solid coral"}}>
                <Slider 
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

                <div className="circles" style={{backgroundColor: `rgb(${red},${green},${blue})`}}></div>
                </Card.Body>
            </Card>

        </div>
        )
}

export default Colorpicker