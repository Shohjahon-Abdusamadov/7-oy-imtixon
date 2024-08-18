import React, { useEffect, useState } from "react";
import styles from "./product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, saveProducts, setError } from "../../store/ProductSlice";
import { addToCart } from "../../store/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Products = ({ selectedBrand, selectedColor, sortBY }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((store) => store.products);
  const [openAlerts, setOpenAlerts] = useState({});

  const productsSort = [...products].sort((p1, p2) => {
    if (sortBY === "cheap") {
      return p1.price - p2.price;
    }
    if (sortBY === "expensive") {
      return p2.price - p1.price;
    }
    return 0;
  });

  useEffect(() => {
    async function fetchProduct() {
      dispatch(setLoading(true));
      let query = `https://headphones-server.onrender.com/products`;
      const params = [];
      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }
      if (selectedBrand) {
        params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
      }
      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }
      try {
        const response = await fetch(query);
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        const data = await response.json();
        dispatch(saveProducts(data));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchProduct();

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const initialAlerts = {};

    cartItems.forEach((item) => {
      initialAlerts[item.id] = true;
    });

    setOpenAlerts(initialAlerts);
  }, [selectedBrand, selectedColor, dispatch]);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (!cartItems.some((item) => item.id === product.id)) {
      const updatedCart = [...cartItems, product];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      setOpenAlerts((prevState) => ({ ...prevState, [product.id]: true }));
      dispatch(addToCart(product));
    }
  };

  return (
    <div>
      {loading && <h3 className={styles.loading}>Loading products...</h3>}
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.products}>
        {productsSort.map((p) => (
          <li
            style={{ listStyle: "none" }}
            className={styles.product_card}
            key={p.id}
          >
            <img
              style={{ width: "100%", height: "300px", marginBottom: "22px" }}
              src={p.image_url}
              alt={p.name}
            />
            <h3>
              <Link to={`/about-cart/${p.id}`}>{p.name}</Link>
            </h3>
            <p>{p.description}</p>
            <div className={styles.colors}>
              {p.color_options.map((col, index) => (
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
            <strong>{p.price}</strong>
            <br />
            <button
              style={{ marginTop: "22px" }}
              color="primary"
              onClick={() => handleAddToCart(p)}
              disabled={openAlerts[p.id]}
              variant="outlined"
              className="btn btn-success"
            >
              <FiShoppingCart /> Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
