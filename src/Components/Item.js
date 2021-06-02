import React, { Component } from 'react';
import { AppContext } from '../AppContext';

import './Styling/Item.css'


class Item extends Component {
    static contextType = AppContext

    render() {
        return (
            <div className='item'>
                <img className='item-pic' src={this.props.product.photo} />
                <p>{this.props.product.name}</p>
                <h3>${this.props.product.price}</h3>
                <button className='add-cart-btn'
                onClick={() => this.context.addProduct(this.props.product)}
                >
                    Add to cart
                </button>
            </div>
        )
    }
}

export default Item;