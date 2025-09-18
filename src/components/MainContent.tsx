import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import { useState, useEffect } from "react";

import GuitarPage from "./GuitarPage";
import DrumPage from "./DrumPage";
import KeyboardPage from "./KeyboardPage";

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
export default function MainContent() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function FetchDataFromAPI() {
      try {
        const response = await fetch(
          "https://api-music-store.vercel.app/api/products"
        );

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
    (product: IProductData) => product.category == "guitars"
  );

  const DrumProducts: IProductData[] = productData.filter(
    (product: IProductData) => product.category == "drums"
  );

  const KeyboardProducts: IProductData[] = productData.filter(
    (product: IProductData) => product.category == "keyboards"
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home GuitarData={GuitarProducts} />}></Route>
        <Route
          path="/guitars"
          element={<GuitarPage GuitarData={GuitarProducts} />}
        ></Route>
        <Route
          path="/drums"
          element={<DrumPage DrumData={DrumProducts} />}
        ></Route>
        <Route
          path="/keys"
          element={<KeyboardPage KeyboardData={KeyboardProducts} />}
        ></Route>
        <Route path="/microphones" element={<h1>microphones</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
      </Routes>
    </>
  );
}
