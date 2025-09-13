import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-red-600 flex justify-evenly  h-18 w-full text-white text-2xl  ">
        <div className="flex justify-center items-center">
          <NavLink to="/">
            <div className=" font-black  p-1 rounded-tl-xl rounded-br-xl border-2 border-white">
              Musical
            </div>
          </NavLink>
        </div>
        <ul className="flex justify-center items-center  gap-10">
          <li>
            <NavLink
              to="/guitars"
              className="relative text-lg font-black tracking-widest group"
            >
              GUITARS
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/drums"
              className="relative text-lg font-black tracking-widest group "
            >
              DRUMS
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/keys"
              className="relative text-lg font-black tracking-widest group"
            >
              KEYS
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/microphones"
              className="relative text-lg font-black tracking-widest group "
            >
              MICROPHONES
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="relative text-lg font-black tracking-widest group "
            >
              CONTACT
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
