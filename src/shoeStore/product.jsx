import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { product,getProductId } = this.props
        return (
            <div className='col-lg-4 my-2'>
                <div className="card h-100" >
                    <img className="card-img-top" src={product.image} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                    <div className='card-footer bg-white'>
                    <button className='btn btn-dark' onClick={()=>{getProductId(product.id)}} data-toggle="modal" data-target="#myModal">Detail</button>
                    </div>
                </div>
            </div>
        )
    }
}
