import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo.js';
import  Navcomv from '../Navcomv/Navcomv.js';
import  Zvonok from '../Zvonok/Zvonok.js';

class NavBar extends React.Component{
render(){
    return(
        <div className='container'>
       <nav className=' navbar navbar-dark bg-primary  fixed-top navbar-toggler navbarcl'>
       <Logo />
        <Navcomv name='обо мне' />
        <Navcomv name='Портфолио' />
        <Navcomv name='Ваши выгоды' />
        <Navcomv name='Контакты' />
        <Zvonok />
            </nav>
        </div>
    )
}
}

export default NavBar;