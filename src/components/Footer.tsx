import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-neutral-800 text-white py-10 px-5">
        <div className="grid grid-cols-3 gap-5 py-5    border-b-neutral-500 border-b-2">
          <div className="">
            <h2 className="mb-3  text-xl font-bold">STAY CONNECTED</h2>
            <p className="text-neutral-300">
              Join over 7,000 people who receives updates on new items.
            </p>
            <div className="flex my-3">
              <input
                type="email"
                className=" border-t-2 p-2 border-neutral-500 bg-white text-black"
                placeholder="Email Address"
              />
              <button
                type="button"
                className="bg-orange-500 mx-1 text-white p-2 border-t-2 border-orange-600"
              >
                Sign-Up
              </button>
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold">COMMITED TO MUSIC</h2>
            <p className="text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold">NAVIGATE</h2>
            <nav className=" ">
              <ul className="grid grid-cols-2 gap-1">
                <li>
                  <NavLink to="/">
                    <div className="relative font-black tracking-widest group">
                      Home
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/guitars"
                    className="relative  font-black tracking-widest group"
                  >
                    Guitars
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/drums"
                    className="relative  font-black tracking-widest group "
                  >
                    Drums
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/keys"
                    className="relative font-black tracking-widest group"
                  >
                    Keys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/microphones"
                    className="relative  font-black tracking-widest group "
                  >
                    Microphones
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className="relative  font-black tracking-widest group "
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className=" flex justify-center py-2 border-b-neutral-500 border-b-2">
          <p>
            orbit meadui studio0s rer n rabvens wood ave suite 20 chicago 00
            00056 Map Main 8877756453 syopport
          </p>
        </div>
        <div className="flex justify-center py-2 gap-5 ">
          <p> pricavy policy </p>
          <p>sitemap</p>
          <p>2025 MUSIC</p>
        </div>
      </div>
    </>
  );
}
