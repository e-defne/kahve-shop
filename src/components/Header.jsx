import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"

import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">

      <Link to="/" style={{ TextDecoration: "none" }}>
      <div className="header__logo">
        
        <h2 className="header__logoTitle">TheKahve Shop </h2>
      </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />

      </div>

      <div className="header__nav">

        <Link to="/login" style={{textDecoration:"none"}}>
        <div className="nav__item">
          <span className="nav__itemLineOne">Merhaba</span>
          <span className="nav__itemLineTwo">Giriş Yap</span>
        </div>
        </Link>

        <div className="nav__item">
          <span className="nav__itemLineOne">Alışveriş</span>
          <span className="nav__itemLineTwo">Listeniz</span>
        </div>

        <Link to="/checkout" style={{ TextDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>

        </Link>



      </div>
    </div>
  )
}

export default Header