// Directions: Create a component called Slider that has 3 range input tags, each having a label 'R', 'G',  or 'B'.
import React, { useState } from 'react';
import './App.css';
import SwatchCreator from './Components/SwatchCreator.js';
import Swatch from './Components/Swatch.js';


const App =  () => {

    const [swatches, setSwatches] = useState([])
    const saveSwatch = (newSwatch) => {
        setSwatches([...swatches, newSwatch])
    }
    const resetSwatch = () => {
        setSwatches([]);

    }
    // const initialState={red:'128', green:'128', blue:'128'}
        return(
            <div className='App'>
                <h1 className="title">Swatch Creator</h1>
                <SwatchCreator saveSwatch={saveSwatch} resetSwatch={resetSwatch}/>
                <div className='swatch-main-wrapper' >
                    {/* <div>{swatches.length}</div> */}
                    {swatches.map((swatch, id) => (
                  
                            <div>
                                <Swatch title={swatch.title} colors={swatch.colors} key={id} />
                            </div>    
        
                             ) )}

                </div>
            </div>
        )
    

}

export default App;