import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import { useState } from "react";

import { guitars } from "../Data/Guitar";

export default function MainContent() {
  const [guitarData] = useState(guitars);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home GuitarData={guitarData} />}></Route>
        <Route path="/guitars" element={<h1>guitars </h1>}></Route>
        <Route path="/drums" element={<h1>drums</h1>}></Route>
        <Route path="/keys" element={<h1>keys</h1>}></Route>
        <Route path="/microphones" element={<h1>microphones</h1>}></Route>
        <Route path="/pro-audio" element={<h1>pro audio</h1>}></Route>
        <Route path="/studio" element={<h1>Studio</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
      </Routes>
    </>
  );
}
