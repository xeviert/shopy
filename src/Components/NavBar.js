import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'
import './Styling/NavBar.css';

export default class NavBar extends Component {
    static contextType = AppContext;

    render() {
        let products = this.context.product

        return (
            <nav id='nav-bar'>
                <div id='container-inside-nav'>
                    <h1>Aqua Flask</h1>
                    <div id='nav-links'>
                        <Link className='link' to="/">Home</Link>
                        Cart ({products.length})
                        {/* <Link className='link' to="/about">About</Link> */}
                    </div>
                </div>
            </nav>
        )
    }
}
