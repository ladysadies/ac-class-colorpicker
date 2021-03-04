// Directions: Create a component called Slider that has 3 range input tags, each having a label 'R', 'G',  or 'B'.
import React, { Component } from 'react';
import './App.css';
import Colorpicker from './Components/Colorpicker.js'



class App extends Component {

    render() {
        return(
            <div>
                <br/>
                <h1 style={{textAlign: 'center', color: 'coral'}}>Swatches Color Picker</h1>
                <br/>
                <div className="cps" style={{display: 'flex', alignItems: 'center', textAlign: 'center', alignContent: 'center', justifyContent: 'center'}}>
                    <div className="cp1" style={{marginRight: '2em'}}>
                        <Colorpicker />
                    </div>
                    <div className="cp2" style={{marginRight: '2em'}}>
                        <Colorpicker />
                    </div>
                    <div className="cp3">
                        <Colorpicker />
                    </div>
                </div>
            </div>
        )
    }

}

export default App;