import React, { Component } from 'react'
import Product from './product'
export default class ProductList extends Component {
    renderList = () => {
        const { productList,getProductId } = this.props
        return productList.map((product) => {
            return <Product key={product.id} product={product} getProductId={getProductId} />
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                   {this.renderList()}
                </div>
            </div>
        )
    }
}
