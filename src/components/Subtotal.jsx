import React from 'react'
import './Subtotal.css'
//sudo npm i react-currenct-format --save --force 
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h2>
                            toplam ({basket.length} ürün): 
                        </h2>
                        <h2> <strong>TL{value}</strong> </h2>
                       
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}

            />

            <button>Siparişi Tamamla</button>
        </div>
    )
}

export default Subtotal