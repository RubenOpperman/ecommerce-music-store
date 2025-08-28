import { Routes, Route } from "react-router-dom";

import Home from "./Home";

export default function MainContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
