import React from "react";
import styles from "./filter.module.scss";

const Filter = ({ setSortBY }) => {
  const handleChange = (e) => {
    setSortBY(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "#D5F8CF",
        paddingBlock: "28px",
        marginBottom: "67px",
      }}
    >
      <div className={styles.sortby}>
        <p>Filter by:</p>

        <select
          name="price"
          onChange={handleChange}
        >
          <option value="none">None</option>
          <option value="cheap">Cheap</option>
          <option value="expensive">Expensive</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
