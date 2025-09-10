import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import { useState } from "react";

import { guitars } from "../Data/Guitar";
import GuitarPage from "./GuitarPage";

export default function MainContent() {
  const [guitarData] = useState(guitars);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home GuitarData={guitarData} />}></Route>
        <Route
          path="/guitars"
          element={<GuitarPage GuitarData={guitarData} />}
        ></Route>
        <Route path="/drums" element={<h1>drums</h1>}></Route>
        <Route path="/keys" element={<h1>keys</h1>}></Route>
        <Route path="/microphones" element={<h1>microphones</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
      </Routes>
    </>
  );
}
