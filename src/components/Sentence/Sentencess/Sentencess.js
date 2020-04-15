import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Sentencess.css';
import Sentence from '../Sentence/Sentence.js';
class Sentencess extends React.Component{
    render(){
        return(
            <div >
                <div className='container'>
                    <h2>
                        Что я предлагаю
                    </h2>
                </div>
                <div className='container '>
                    <div className='row'>
                       
                    <Sentence info={{
                        src: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                        alt: 'efsdf ',
                        text: 'Meniz zovut misha',
                        col:'col-3'
                    }} />
                    <Sentence info={{
                        src: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                        alt: 'efsdf ',
                        text: 'Meniz zovut misha',
                        col: 'col-3'
                    }} />
                    <Sentence info={{
                        src: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                        alt: 'efsdf ',
                        text: 'Meniz zovut misha',
                        col:'col-3'
                    }} />
                    <Sentence info={{
                        src: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                        alt: 'efsdf ',
                        text: 'Meniz zovut misha',
                        col:'col-3'
                    }} />
                    <Sentence info={{
                        src: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                        alt: 'efsdf ',
                        text: 'Meniz zovut misha',
                        col:'col-3'
                    }} />
                    <Sentence info={{
                        src: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                        alt: 'efsdf ',
                        text: 'Meniz zovut misha',
                        col:'col-3'
                    }} />
                    <Sentence info={{
                        src: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                        alt: 'efsdf ',
                        text: 'Meniz zovut misha',
                        col:'col-3'
                    }} />
                    <Sentence info={{
                        src: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                        alt: 'efsdf ',
                        text: 'Meniz zovut misha',
                        col:'col-3'
                    }} />
                
                    </div>
                </div>
            </div>
        )
    }
}

export default Sentencess;