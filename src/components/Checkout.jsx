//import { SportsBasketball } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";


function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://i.pinimg.com/564x/86/11/7d/86117d682f596f72fc7360f17d12db8e.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Alışveriş Sepetiniz
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                    
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout