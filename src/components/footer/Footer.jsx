import React from "react";
import styles from "./footer.module.scss";
import logo from "../../../public/footerLogo.svg";
import GG from "../../../public/GG.svg";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_wrapper}>
        <div className={styles.footerPrimary}>
          <img src={logo} alt="logo icon" />
          <p>START YOUR GAME WITH THE BEST</p>
          <div className={styles.icons}>
            <FaTwitter style={{ color: "#55ACEE", fontSize: "24px" }} />
            <FaLinkedin style={{ color: "#007FB5", fontSize: "24px" }} />
            <FaFacebook style={{ color: "#3B5998", fontSize: "24px" }} />
            <FaInstagram style={{ color: "#D9D9D9", fontSize: "24px" }} />
          </div>
        </div>

        <div className={styles.footerSecondary}>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link className={styles.link} to="#">
                  Gift Card
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Order Pickup
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Account Signup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Help</h4>
            <ul>
              <li>
                <Link className={styles.link} to="#">
                  ShopCart Help
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Returns
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Track Orders
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Feedback
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Security & Fraud
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>About</h4>
            <ul>
              <li>
                <Link className={styles.link} to="#">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Help
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="#">
                  Press Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer_bot}>
        <div className={styles.line}></div>
        <div className={styles.bot}>
          <img src={GG} alt="GG icon" />
          <Link className={styles.link} to='#'>
            <FaRegQuestionCircle />
            Help Center
          </Link>
          <Link className={styles.link} to='#'>Privacy & Policy</Link>
          <Link className={styles.link} to='#'>Terms of Service</Link>
          <Link className={styles.link} to='#'>All rights reserved by GameGeek | 2023</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
