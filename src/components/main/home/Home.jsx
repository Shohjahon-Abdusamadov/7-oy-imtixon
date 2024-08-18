import React, { useState } from "react";
import Hero from "../hero/Hero";
import Filter from "../filter/Filter";
import Products from "../products/Products";
import Aside from "../asside/Aside";
import styles from "./home.module.scss";

const Home = ({ filters, handleFilterChange }) => {
  const [sortBY, setSortBY] = useState("");

  return (
    <div>
      <Hero />
      <Filter setSortBY={setSortBY} />

      <div className={styles.mainWrapper}>
        <Aside onFilterChange={handleFilterChange} />
        <Products
          selectedBrand={filters.selectedBrand}
          selectedColor={filters.selectedColor}
          sortBY={sortBY}
        />
      </div>
    </div>
  );
};

export default Home;
