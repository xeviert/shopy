import React, { Component } from 'react'
import {AppContext} from '../AppContext'

import './Styling/Cartbar.css'

export default class Cartbar extends Component {
    static contextType = AppContext

    render() {
        return (
            <div id='sidebar'>
                <div>
                    {this.context.product}
                </div>
                <button id='checkout-btn'>
                    Checkout
                </button>
            </div>
        )
    }
}