import React, { Component } from 'react'
import {AppContext} from '../AppContext'

import './Styling/Cartbar.css'

export default class Cartbar extends Component {
    static contextType = AppContext

    render() {
        let products = this.context.product
        
        return (
            <div id='sidebar'>
                <div>
                    {products.map(product => (
                    <p>
                        {product.name}
                        ${product.price}
                    </p>
                    ))}
                </div>
                <button id='checkout-btn'>
                    Checkout
                </button>
            </div>
        )
    }
}