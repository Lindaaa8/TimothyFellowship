import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { pathMatch } from 'tough-cookie';
import logo from '../asset/';  // get the logoImage


// menu bar to select (in mobile version)


export default class Header extends Component {
    render () {
        const path = this.props.location.pathname;

        return (
            <div className="header">
                <header>
                    <img src={ logo } alt="logo" />
                    <h1>Timothy Fellowship</h1>
                </header>
                <nav>
                    {
                        pathMatch.includes('Home') ? 
                        <Link to={"/home"}> 
                            <p className="selected none">Home</p>
                        </Link> :
                        <Link to={"/home"}> 
                            <p className="none">Home</p>
                        </Link>
                    }
                    {
                        pathMatch.includes('Explore') ? 
                        <Link to={"/explore"}> 
                            <p className="selected none">Explore</p>
                        </Link> :
                        <Link to={"/explore"}> 
                            <p className="none">Explore</p>
                        </Link>
                    }
                    {
                        pathMatch.includes('Contact') ? 
                        <Link to={"/contact"}> 
                            <p className="selected none">Contact</p>
                        </Link> :
                        <Link to={"/contact"}> 
                            <p className="none">Contact</p>
                        </Link>
                    }
                </nav>
            </div>
        )
    }
}