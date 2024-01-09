import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://www.thespruceeats.com/thmb/k94jBjnURCV5iaNiH27He2orPx0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1027165934-9ba714b5004e44c0a023eae30a8c408c.jpg" alt="" className="home__image" />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Çekirdek Kahve 250 gram"
                        price={79.90}
                        image="https://i.pinimg.com/564x/2d/98/09/2d98095c056012c729ad5c5cdbbafdb3.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Filtre Kahve 250 gram"
                        price={49.90}
                        
                        image="https://i.pinimg.com/564x/9b/ef/37/9bef37ccb787806b7d79a4bd9ca2fc96.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Soğuk Kahve Büyük Boy"
                        price={89.40}
                       
                        image="https://i.pinimg.com/564x/c5/59/d8/c559d827965e09a206ee46bef4370dfe.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Türk Kahvesi 100 gram"
                        price={69.90}
                        image="https://i.pinimg.com/564x/92/9f/86/929f863fd7ba1e8dda0314c068b1fdda.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Americano Büyük Boy"
                        price={76.90}
                        image="https://i.pinimg.com/736x/fd/70/bc/fd70bc4a08be1c45a465ab7acc915cc4.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Latte Büyük Boy"
                        price={74.50}
                        
                        image="https://i.pinimg.com/564x/56/b2/ad/56b2ad553c0c4430b5bf062edb32321e.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home