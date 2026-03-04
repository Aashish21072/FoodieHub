import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from "../../assets/admin_assets/assets";
import {assets as frontendAssets} from "../../assets/frontend_assets/assets"
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const[menu, setMenu] = useState("home");
    const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img className="logo" src={assets.logo} alt= "logo"/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")}className={menu === "home"?"active":""}>home</Link>
        <a href='#explore-menu'onClick={()=>setMenu("menu")}className={menu === "menu"?"active":""}>menu</a>
        <a href='#app-download'onClick={()=>setMenu("mobile-app")}className={menu === "mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer'onClick={()=>setMenu("contact-us")}className={menu === "contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={frontendAssets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={frontendAssets.basket_icon} alt ="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
