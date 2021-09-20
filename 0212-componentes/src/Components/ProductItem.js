import React from "react";

const ProductItem = ({ name, properties }) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: '1rem' }}>
      <h3>{name}</h3>
      <ul>
        {properties.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductItem;
