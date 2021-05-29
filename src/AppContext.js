import React, { Component } from 'react'
import {products} from './store'

export const AppContext = React.createContext({
    products: []
});

export default class AppProvider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: []
        }
    }

    addProduct = (product) => {
        this.setState({product: [...this.state.product, product]})
    }

    render() {
        const value = {
            addProduct: this.addProduct,
            product: this.state.product,
        }

        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
