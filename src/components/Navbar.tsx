import { Routes, Route, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-red-500 flex justify-evenly  h-17 w-full text-white text-2xl">
        <div className="flex justify-center">
          <NavLink to="/">logo</NavLink>
        </div>
        <ul className="flex justify-center gap-5">
          <li>
            <NavLink to="/ourStory">Our story</NavLink>
          </li>
          <li>
            <NavLink to="/gear">Gear</NavLink>
          </li>
          <li>
            <NavLink to="/repairs">Repairs</NavLink>
          </li>
          <li>
            <NavLink to="/stores">Stores</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>

          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>home</h1>}></Route>
        <Route path="/ourStory" element={<h1>Our story fsdffd</h1>}></Route>
        <Route path="/gear" element={<h1>Gear</h1>}></Route>
        <Route path="/repairs" element={<h1>Repairs</h1>}></Route>
        <Route path="/stores" element={<h1>Stores</h1>}></Route>
        <Route path="/blog" element={<h1>Blog</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
      </Routes>
    </>
  );
}
