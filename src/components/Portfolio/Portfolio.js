
import React from 'react';
import './Portfolio.css';
import Port from './Port1/Port1.js';


class Portfolio extends React.Component{
    render(){
        return(
            <div className='container'>
            <div>
                <h1>Портфолио</h1>
            </div>
            <div className='row'>
                <Port info={{
                        src: 'https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1',
                        alt: 'mishaLo[] ',
                        text: 'sosu pisos z rubos',
                        col:'col-4'}}
                        />
               <Port info={{
                        src: 'https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1',
                        alt: 'mishaLo[] ',
                        text: 'sosu pisos z rubos',
                        col:'col-4'}}/>
                 <Port info={{
                    src: 'https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1',
                    alt: 'mishaLo[] ',
                    text: 'sosu pisos z rubos',
                    col:'col-4' }}
                    />
            </div>
            </div>
        )
    }
}
export default Portfolio;