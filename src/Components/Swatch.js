import React from 'react';
import Card from 'react-bootstrap/Card';

const Swatch = (props) => {
        return(
            <div>
                <Card style= {{width: '18rem'}}>
                    <Card.body>
                        <div className='swatchCard'>
                            <div>{props.title}</div>
                            {props.colors.map((color)=>{
                                return(<div style={{background: `rgb(${color.r}, ${color.g}, ${color.b})`, height: 100}}></div>)
                            })}
                        </div>
                    </Card.body>

                </Card>
            </div>
        )
}

export default Swatch;