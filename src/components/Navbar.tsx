import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-red-500 flex justify-evenly  h-17 w-full text-white text-2xl  ">
        <div className="flex justify-center items-center">
          <NavLink to="/">logo</NavLink>
        </div>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <NavLink to="/guitars">Guitars</NavLink>
          </li>
          <li>
            <NavLink to="/drums">Drums</NavLink>
          </li>
          <li>
            <NavLink to="/keys">Keys</NavLink>
          </li>
          <li>
            <NavLink to="/microphones">Microphones</NavLink>
          </li>
          <li>
            <NavLink to="/pro-Audio">Pro Audio</NavLink>
          </li>

          <li>
            <NavLink to="/studio">Studio</NavLink>
          </li>

          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
