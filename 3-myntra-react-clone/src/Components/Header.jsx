import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const bag = useSelector((store) => store.bag);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <IoSearchSharp style={{ fontSize: "1.4em", marginTop: "7px" }} />
          </span>
          <input
            className="search_input text-input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <Link className="action_container" to="/login">
            <BsPerson style={{ fontSize: "1.7em" }} />
            <span className="action_name">Profile</span>
          </Link>

          <div className="action_container">
            <CiHeart style={{ fontSize: "1.7em" }} />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <HiOutlineShoppingBag style={{ fontSize: "1.7em" }} />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
