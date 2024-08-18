// In Header.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GG from "../../../public/GG.svg";
import USA from "../../../public/USA.svg";
import GameGeek from "../../../public/GameGeek.svg";
import { FaPhoneAlt, FaAngleDown, FaGlobeAmericas } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import styles from "./header.module.scss";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of items in the cart
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={GG} alt="logo icon" />
            </Link>
            <div className={styles.phone}>
              <p>
                <FaPhoneAlt /> +4904-049-950
              </p>
            </div>
          </div>

          <div className={styles.shop}>
            <p>Get 50% Off on the Selected items</p>
            <div className={styles.line}></div>
            <a href="#">Shop now</a>
          </div>

          <div className={styles.optionWrapper}>
            <div className={styles.option}>
              <FaAngleDown />
              English
              <img src={USA} alt="USA icon" />
            </div>

            <div className={styles.location}>
              <FaGlobeAmericas />
              Location
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navWrapper}>
        <Link to="/" className="logo">
          <img src={GameGeek} alt="GameGeek icon" />
        </Link>

        <nav>
          <ul>
            <li><Link className={styles.link} to="#">Categories</Link></li>
            <li><Link className={styles.link} to="#">Brands</Link></li>
            <li><Link className={styles.link} to="#">What’s new</Link></li>
            <li><Link className={styles.link} to="#">Sales</Link></li>
            <li><Link className={styles.link} to="#">Help</Link></li>
            <li><Link className={styles.link} to="#">About</Link></li>
          </ul>
        </nav>

        <div className={styles.icons}>
          <FiSearch />
          <LuUser />
          <Link to='/cart' className={styles.cartLink}>
            <FiShoppingCart />
            {cartItemCount > 0 && (
              <span className={styles.cartCount}>{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
