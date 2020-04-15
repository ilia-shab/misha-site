import React from 'react';
import './Port1.css'
class Sentencess extends React.Component{
    render(){
        return(
            <div className={this.props.info.col}>
               <img src={this.props.info.src} alt={this.props.info.src} />
                <p>{this.props.info.text}</p>
            </div>
        )
    }
}

export default Sentencess;