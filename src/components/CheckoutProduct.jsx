import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,

        })

    }
    return (

        <div className="checkoutProduct">
            <img src={image}
                alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                
                <p className="checkoutProduct__price">
                    <small> TL</small>
                    <strong>{price}</strong>
                </p>
    
                <button onClick={removeFromBasket}>Sepetten Çıkar</button>
            </div>
        </div>


    )
}

export default CheckoutProduct