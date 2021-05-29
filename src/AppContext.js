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

    // componentDidMount() {
    //     this.setProducts()
    // }

    // setProducts = () => {
    //     this.setState({
    //         products
    //     })
    // }

    addProduct = (product) => {
        this.setState({
            product
        })
    }

    render() {
        const value = {
            addProduct: this.addProduct,
        }

        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}