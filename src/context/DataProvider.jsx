import React, { useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.in/api/products?limit=150");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const products = await response.json();
      setData(products.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <DataContext.Provider value={{ data, fetchAllProducts, setData }}>
      {children}
    </DataContext.Provider>
  );
};
