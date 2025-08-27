import { Routes, Route } from "react-router-dom";
export default function MainContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>home</h1>}></Route>
        <Route path="/ourStory" element={<h1>Our story </h1>}></Route>
        <Route path="/gear" element={<h1>Gear</h1>}></Route>
        <Route path="/repairs" element={<h1>Repairs</h1>}></Route>
        <Route path="/stores" element={<h1>Stores</h1>}></Route>
        <Route path="/blog" element={<h1>Blog</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
      </Routes>
    </>
  );
}
