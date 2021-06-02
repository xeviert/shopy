import React, { Component } from 'react'
import { AppContext } from '../AppContext'

import './Styling/Cartbar.css'

export default class Cartbar extends Component {
    static contextType = AppContext

    render() {
        let products = this.context.product
        console.log(products.price)

        return (
            <div id='sidebar'>
                <div>
                    {products.map(product => (
                    <p className='cart'>
                        <span>{product.name}</span>
                        <span>${product.price}</span>
                    </p>
                    ))}
                </div>
                <div>
                    <button id='checkout-btn'
                    onClick={() => this.context.checkout()}
                    >
                        Checkout
                    </button>
                    <div role='alert'
                        onClick={() => this.context.handleClose()}
                    >
                        {/* {products.price.reduce((a, b) => a + b, 0)} */}
                    </div>
                </div>
            </div>
        )
    }
}