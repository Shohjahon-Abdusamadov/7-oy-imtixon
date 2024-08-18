import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./aboutcart.module.scss";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartItem } from "../../store/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";

const AboutCart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://headphones-server.onrender.com/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Error fetching product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchProduct();
  }, [id]);

  const increment = (id) => {
    dispatch(updateCartItem({ id, type: "increase" }));
  };

  const decrement = (id) => {
    dispatch(updateCartItem({ id, type: "decrease" }));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const cartItem = items.find((item) => item.id === product.id);

  return (
    <div style={{ maxWidth: "1298px", margin: "auto", marginTop: "200px" }}>
      <div>
        <p>Products / Gaming Headsets & Audio / {product.name}</p>
      </div>
      <div className={styles.wrapper}>
        <div style={{ display: "flex", flexDirection: "column", gap: "145px" }}>
          <img
            src={product.image_url}
            alt={product.name}
            style={{ width: "700px", height: "550px" }}
          />

          <div
            style={{ display: "flex", gap: "37px" }}
          >
            <img
              src={product.image_url}
              alt={product.name}
              style={{ width: "114px", height: "114px" }}
            />

            <img
              src={product.image_url}
              alt={product.name}
              style={{ width: "114px", height: "114px" }}
            />

            <img
              src={product.image_url}
              alt={product.name}
              style={{ width: "114px", height: "114px" }}
            />

            <img
              src={product.image_url}
              alt={product.name}
              style={{ width: "114px", height: "114px" }}
            />
          </div>
        </div>
        <div className={styles.info}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            <CiStar
              style={{ color: "#FFC700", width: "20px", height: "20px" }}
            />
            <CiStar
              style={{ color: "#FFC700", width: "20px", height: "20px" }}
            />
            <CiStar
              style={{ color: "#FFC700", width: "20px", height: "20px" }}
            />
            <CiStar
              style={{ color: "#FFC700", width: "20px", height: "20px" }}
            />
          </p>

          <div style={{ marginBottom: "30px" }} className={styles.line}></div>

          <strong>
            {cartItem ? cartItem.price * cartItem.quantity : product.price} or
            99.9/month
          </strong>

          <p>Suggested payments with 6 month special financing</p>

          <div className={styles.line}></div>

          <div>
            <h4>Choose a color</h4>
            {product.color_options.map((col, index) => (
              <div
                key={index}
                style={{
                  width: "66px",
                  height: "66px",
                  border: "solid",
                  borderRadius: "50%",
                  background: col,
                  display: "inline-block",
                  marginRight: "5px",
                  marginBottom: "37px",
                }}
              ></div>
            ))}
          </div>

          <div className={styles.line}></div>

          {cartItem && (
            <div className={styles.btn_wrapper}>
              <button
                className={styles.btn_countD}
                onClick={() => decrement(product.id)}
                disabled={cartItem.quantity === 1}
              >
                -
              </button>
              <strong>{cartItem.quantity}</strong>
              <button
                className={styles.btn_countI}
                onClick={() => increment(product.id)}
              >
                +
              </button>
            </div>
          )}

          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <button
              style={{ width: "100%", paddingBlock: "16px", fontSize: "22px" }}
              color="primary"
              onClick={handleAddToCart}
              variant="outlined"
              className="btn btn-success"
            >
              <FiShoppingCart /> Add to Cart
            </button>
            <button className={styles.like}>
              <FcLike />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCart;
