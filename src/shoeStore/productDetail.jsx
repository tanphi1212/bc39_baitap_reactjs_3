import React, { Component } from 'react'

export default class productDetail extends Component {
    render() {
        const { product } = this.props
        return (
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{product.name}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <img className='img-fluid mx-auto d-block' src={product.image} width={'50%'} alt="" />
                            <p>{product.description}</p>
                            <p>Quantity: <span>{product.quantity}</span></p>
                            <h3>Price: <span className='badge badge-danger'>{product.price} $</span> </h3>
                            
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
