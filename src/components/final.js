import React from 'react';
import NavBar from './NavBar/NavBar/NavBar.js';
import AboutMe from './AboutMe/AboutMe.js';
import Sentencess from './Sentence/Sentencess/Sentencess.js';
import Portfolio from './Portfolio/Portfolio.js';
import Vigoda from './vigoda/Vigoda.js';
import Contacts from './Contacts/Contacts.js'

class Final extends React.Component{
    render(){
        return(
         <div>
         /*<NavBar />*/
         <AboutMe />
         <Sentencess />
         <Portfolio />
         <Vigoda />
         <Contacts />
         </div>  
        )
    }
}
export default Final;