import React, { Component } from 'react'
import ProductList from './productList'
import data from './data.json'
import ProductDetail from './productDetail'
export default class ShoeStore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: data,
      product: {},
    }

  }
  handleDetail = (id) => {
    console.log(id)
    let product = this.state.productList.find(product => product.id === id)
    this.setState({
      product,
    })
  }
  render() {
    return (
      <>
        <ProductDetail product={this.state.product}/>
        <div className='container'>
          <h1 className='text-center'>Shoes Store</h1>
          <ProductList productList={this.state.productList} getProductId={this.handleDetail} />
        </div>
        
      </>


    )
  }
}
