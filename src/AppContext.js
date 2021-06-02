import React, { Component } from 'react'
import {products} from './store'

export const AppContext = React.createContext({
    products: []
});

export default class AppProvider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: [],
            isOpen: false
        }
    }

    addProduct = (product) => {
        this.setState({product: [...this.state.product, product]})
    }

    checkout = () => {
        this.setState({isOpen: true})
    }

    handleClose = () => {
        this.setState({isOpen: false})
    }

    render() {
        const value = {
            addProduct: this.addProduct,
            checkout: this.checkout,
            handleClose: this.handleClose,
            product: this.state.product,
        }

        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
