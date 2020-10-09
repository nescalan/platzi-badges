import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar />
                <div>
                    <div className="BadgeNew__hero">
                        <img className="img-fluid" src={header} alt=""/>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Badge 
                                firstName="Nelson" 
                                lastName="Gonzalez" 
                                tweeter="@mulurkie" 
                                jobTitle="Engineer" 
                                avatarUrl="https://avatars1.githubusercontent.com/u/30724303?s=460&u=dfb8b4d0c6630a4729937d9dfe2c3b34ba346b6a&v=4" />
                            </div>

                            <div className="col-6">
                                <BadgeForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BadgeNew;