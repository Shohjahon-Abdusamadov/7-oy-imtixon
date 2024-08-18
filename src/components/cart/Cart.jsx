import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItem, removeFromCart } from "../store/cartSlice";
import "./cart.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./cart.module.scss";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increment = (id) => {
    dispatch(updateCartItem({ id, type: "increase" }));
  };

  const decrement = (id) => {
    dispatch(updateCartItem({ id, type: "decrease" }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div style={{ margin: "auto", marginTop: "200px", maxWidth: "1298px" }}>
      <div className={styles.cart}>
        <Link className={styles.back} to="/">
          <FaLongArrowAltLeft /> Back to Shopping
        </Link>
        <h2>SHOPPING CART</h2>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <ul className={styles.itemWapper}>
            {items.length ? (
              items.map((item) => (
                <li className={styles.wrapper} key={item.id}>
                  <div className={styles.remove_btn}>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      X
                    </button>
                  </div>
                  <div className={styles.line_flex}>
                    <img src={item.image_url} alt={item.name} />

                    <div className={styles.info_wrapper}>
                      <h2>{item.name}</h2>
                      <p>{item.brand_name}</p>
                      <div className={styles.colors}>
                        {item.color_options.map((col, index) => (
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              border: "solid",
                              borderRadius: "50%",
                              background: col,
                              display: "inline-block",
                              marginRight: "5px",
                            }}
                            key={index}
                          ></div>
                        ))}
                      </div>
                      <div className={styles.stock}>In stock</div>
                    </div>

                    <div className={styles.btn_wrapper}>
                      <button
                        className={styles.btn_countD}
                        onClick={() => decrement(item.id)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <strong>{item.quantity}</strong>
                      <button
                        className={styles.btn_countI}
                        onClick={() => increment(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className={styles.price}>
                      <strong>{item.price}</strong> x {item.quantity} ={" "}
                      <strong>{item.price * item.quantity}</strong>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                </li>
              ))
            ) : (
              <p>Your list is empty</p>
            )}
          </ul>
        </div>

        <div style={{ border: "2px solid #E9E7E7" }}></div>
        
        {items.length > 0 && (
          <div>
            <div className={styles.cartTotal}>
              <h2>CART TOTALS</h2>

              <div
                className={styles.line}
                style={{ marginBottom: "37px" }}
              ></div>

              <div className={styles.total}>
                <p>Shipping (3-5 Business Days)</p>
                <strong>Free</strong>
              </div>

              <div className={styles.total}>
                <p>TAX (estimated for the United States (US))</p>
                <strong>$0</strong>
              </div>

              <div className={styles.total}>
                <p>Subtotal</p>
                <strong>${subtotal}</strong>
              </div>

              <div
                className={styles.line}
                style={{ marginBottom: "33px" }}
              ></div>

              <div className={styles.total}>
                <h3>Total</h3>
                <strong>${subtotal}</strong>
              </div>

              <button className="btn btn-success">Proceed to Checkout</button>

              <Link className={styles.back} to="/">
                <FaLongArrowAltLeft /> Back to Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
