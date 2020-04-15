import React from 'react';
import './Contacts.css';
import Port from './Port1/Port1.js';

class Final extends React.Component{
    render(){
        return(
         <div className='container'>

             <div>
                 <h1>
                     Kak so mnoiu sviazatsia
                 </h1>
             </div>

             <div className='row'>
             <Port info={{
                        src: 'https://techcrunch.com/wp-content/uploads/2017/10/gmail-grid.png',
                        alt: 'mishaLo[] ',
                        text: 'pochta',
                        col:'col-4'}}/>
            <Port info={{
                        src: 'data:image/png;base64,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',
                        alt: 'mishaLo[] ',
                        text: 'telefon',
                        col:'col-4'}}/>
            <Port info={{
                        src: 'https://c7.hotpng.com/preview/609/937/211/facebook-messenger-logo-icon-facebook-application-cliparts-thumbnail.jpg',
                        alt: 'mishaLo[] ',
                        text: 'messedger',
                        col:'col-4'}}/>
             </div>
         
         </div>  
        )
    }
}
export default Final;