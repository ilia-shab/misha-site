import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './NavBar.css';
import Logo from '../NavBar/Logo/Logo.js';
import  Navcomv from '../NavBar/Navcomv/Navcomv.js';
import  Zvonok from '../NavBar/Zvonok/Zvonok.js';

class NavBar extends React.Component{
render(){
    return(
       <nav className=' navbar navbar-dark bg-primary  fixed-top navbar-toggler'>
       <Logo />
        <Navcomv name='обо мне' />
        <Navcomv name='Портфолио' />
        <Navcomv name='Ваши выгоды' />
        <Navcomv name='Контакты' />
        <Zvonok />
            </nav>
    )
}
}

export default NavBar;