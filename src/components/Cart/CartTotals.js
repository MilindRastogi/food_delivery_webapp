import React from 'react';
import {Link} from 'react-router-dom';
export default function CartTotals({value}) {
    const {cartSubTotal,cartTax,cartTotal,cart,clearCart} = value;
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase md-3 px-5" 
                        type="button" onClick={() => clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span>SubTotal : <strong>{cartSubTotal}</strong></span>
                    </h5>
                    <h5>
                        <span>tax : <strong>{cartTax}</strong></span>
                    </h5>
                    <h5>
                        <span>total : <strong>{cartTotal}</strong></span>
                    </h5>
                    <Link to ="/form">
                    <button>Proceed to Pay</button>
                    </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}
