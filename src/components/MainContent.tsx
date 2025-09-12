import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import { useState, useEffect } from "react";

import GuitarPage from "./GuitarPage";

interface IProductData {
  id: number;
  category: string;
  name: string;
  image: string;
  cost: number;
  availability: boolean;
  amountInStock: number;
  amountBought: number;
  dateAdded: string;
  brand: string;
}
[];

export default function MainContent() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function FetchDataFromAPI() {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProductData(data);

        return data;
      } catch (error) {
        console.error("error fetching data:", error);
      }
    }
    FetchDataFromAPI();
  }, []);

  const GuitarProducts: IProductData[] = productData.filter(
    (product) => product.category == "guitars"
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home GuitarData={GuitarProducts} />}></Route>
        <Route
          path="/guitars"
          element={<GuitarPage GuitarData={GuitarProducts} />}
        ></Route>
        <Route path="/drums" element={<h1>drums</h1>}></Route>
        <Route path="/keys" element={<h1>keys</h1>}></Route>
        <Route path="/microphones" element={<h1>microphones</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
      </Routes>
    </>
  );
}
