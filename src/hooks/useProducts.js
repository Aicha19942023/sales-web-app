//import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function usePoducts() {
  return useQuery(["products"], () =>
    fetch("http://localhost:3001/products").then((response) => response.json()),
  );

  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       const response = await fetch("http://localhost:3001/products");
  //       const data = await response.json();
  //       setProducts(data);
  //     };
  //     fetchProducts();
  //   }, []);
}
