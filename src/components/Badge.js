import React from 'react';
import confLogo from '../images/logo.svg';
import './styles/Badge.css';

class Badge extends React.Component {
    render(){
        return(
        <div className="Badge">
            <div className="Badge__header">
              <img src={confLogo} alt="Logo de la Conferencia"/>
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://avatars1.githubusercontent.com/u/30724303?s=460&u=dfb8b4d0c6630a4729937d9dfe2c3b34ba346b6a&v=4" alt="Avatar"/>
                <h1>Ing. Nelson <br/> Gonzalez</h1>
            </div>

            <div className="Badge__section-info">
                <h3>Frontend Engineer</h3> 
                <div>@mulurkie</div>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>

        </div>
        )
    }
}

export default Badge;