import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveColors,
  setColorLoading,
  setColorError,
} from "../../store/ColorSlice";
import {
  saveBrands,
  setBrandLoading,
  setBrandError,
} from "../../store/BrandSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const Aside = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const { colors, colorsLoading, colorsError } = useSelector(
    (store) => store.colors
  );
  const { brands, brandLoading, brandError } = useSelector(
    (store) => store.brand
  );

  useEffect(() => {
    async function fetchColors() {
      dispatch(setColorLoading(true));
      try {
        const response = await fetch(
          "https://headphones-server.onrender.com/colors"
        );
        if (!response.ok) {
          throw new Error("Error fetching colors");
        }
        const data = await response.json();
        dispatch(saveColors(data));
      } catch (error) {
        dispatch(setColorError(error.message));
      } finally {
        dispatch(setColorLoading(false));
      }
    }
    fetchColors();
  }, [dispatch]);

  useEffect(() => {
    async function fetchBrands() {
      dispatch(setBrandLoading(true));
      try {
        const response = await fetch(
          "https://headphones-server.onrender.com/brands"
        );
        if (!response.ok) {
          throw new Error("Error fetching brands");
        }
        const data = await response.json();
        dispatch(saveBrands(data));
      } catch (error) {
        dispatch(setBrandError(error.message));
      } finally {
        dispatch(setBrandLoading(false));
      }
    }
    fetchBrands();
  }, [dispatch]);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    onFilterChange({ selectedBrand: brand });
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onFilterChange({ selectedColor: color });
  };

  return (
    <aside className="aside-wrapper">
      <ul className="brands-list">
        <h2>Brand</h2>
        {brandLoading && <p className="loading">Brand Loading... </p>}
        {brandError && <p className="error">{brandError} </p>}
        {brands && brands.length > 0 ? (
          brands.map((brand, index) => (
            <li
              key={index}
              style={{ display: "flex", alignItems: "center", gap: "18px" }}
            >
              <input
                type="checkbox"
                className="checkbox"
                id={brand}
                name="brand"
                onChange={() => handleBrandChange(brand)}
                checked={selectedBrand === brand}
                style={{
                  cursor: "pointer",
                  border: "2px solid red",
                  width: "20px",
                  height: "20px",
                }}
              />
              <label htmlFor={brand}>{brand}</label>
            </li>
          ))
        ) : (
          <p>No brands available</p>
        )}
        <button
          className="btn btn-success"
          onClick={() => handleBrandChange("")}
        >
          Reset
        </button>
      </ul>

      <h2>Colors</h2>
      <ul className="colors-list">
        {colorsLoading && <p className="loading">Color Loading...</p>}
        {colorsError && <p className="error">{colorsError}</p>}
        {colors.map((color, index) => (
          <li key={index}>
            <button
              onClick={() => handleColorChange(color)}
              style={{
                width: "20px",
                height: "20px",
                border: "solid 1px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: color,
                outlineOffset: "3px",
                outline: selectedColor === color ? "3px solid green" : "",
              }}
            ></button>
          </li>
        ))}
      </ul>
      <button
        style={{ marginLeft: "2rem" }}
        className="btn btn-success bnt_color"
        onClick={() => handleColorChange("")}
      >
        Reset
      </button>
    </aside>
  );
};

export default Aside;
