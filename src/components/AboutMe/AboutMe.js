import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './AboutMe.css';


class AboutMe extends React.Component{
    render(){
        return(
            <div className='container'>
            <div>
                <h1>Обо мне</h1>
            </div>
            <div>
                <img src="https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1" alt='ghb yfltytb' сlassName='img-thumbnail'/>
                <div>
                    <p>Text</p>
                </div>
            </div>
            </div>
        )
    }
}
export default AboutMe;