import React, { Component } from 'react'
import './Styling/Home.css'
import {AppContext} from '../AppContext'
import {products} from '../store'
import Item from './Item'
import Cartbar from './Cartbar'


export default class Home extends Component {
    static contextType = AppContext

    render() {

        return (
            <div>
                <div className='page-body'>  
                <div id='all-items'>
                    <Cartbar />
                    {products.map(product => (
                        <Item
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
                
                </div>
            </div>
        )
    }
}