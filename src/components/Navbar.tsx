import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-red-500 flex justify-evenly h-24 w-full text-white text-2xl  ">
        <div className="flex justify-center items-center">
          <NavLink to="/">logo</NavLink>
        </div>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <NavLink to="/guitars" className="text-xl font-medium hover:font-">
              GUITARS
            </NavLink>
          </li>
          <li>
            <NavLink to="/drums" className="text-xl font-medium">
              DRUMS
            </NavLink>
          </li>
          <li>
            <NavLink to="/keys" className="text-xl font-medium">
              KEYS
            </NavLink>
          </li>
          <li>
            <NavLink to="/microphones" className="text-xl font-medium">
              MICROPHONES
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="text-xl font-medium">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
