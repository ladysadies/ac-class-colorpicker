// Directions: Create a component called Slider that has 3 range input tags, each having a label 'R', 'G',  or 'B'.
import React, { useState } from 'react';
import './App.css';
import Colorpicker from './Components/ColorPicker.js';
import SwatchCreator from './Components/SwatchCreator.js';
import Swatch from './Components/Swatch.js';


const App =  () => {

    const [swatches, setSwatches] = useState([])
    const saveSwatch = (newSwatch) => {
        setSwatches([...swatches, newSwatch])
    }
        return(
            <div className='App'>
                <h1>Swatch Creator</h1>
                <SwatchCreator saveSwatch={saveSwatch}/>
                <div className='swatch-main-wrapper' >
                    {/* <div>{swatches.length}</div> */}
                    {swatches.map((swatch) => (
                  
                            <div>
                                <Swatch title={swatch.tite} colors={swatch.colors} />
                            </div>    
            
                             ) )}

                </div>
            </div>
        )
    

}

export default App;