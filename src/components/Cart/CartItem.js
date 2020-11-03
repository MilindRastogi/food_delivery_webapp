import React from 'react';
import image1 from "../../images/burger.jpg";
export default function CartItem({item,value}) {
    const {id , img, name, price, total, count} = item;
    const {increment , decrement , removeItem,} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
             <img
            src={image1}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt="image" 
          />
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">product : </span>
               {name}
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">price : </span>
               {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() =>decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <div className="cart-icon" onClick={()=> removeItem(id)}>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <i class="fa fa-trash-o"></i>
               </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <strong>item total : {total}</strong>
            </div>
        </div>
    )
}
