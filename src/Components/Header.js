import React, { useState } from "react";
import logo from "../images/logo.svg";
import menuIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header className="absolute z-10 p-10 w-full flex items-center justify-center lg:justify-start lg:items-center">
        <div>
          <img src={logo} alt="logo" className="hover:scale-110 transition-all duration-300 lg:mr-8 " ></img>
        </div>

        <nav className={`${showNav ? " open w-full top-0 py-7 lg:py-0 lg:ml-6 " : ""}` }>
          <ul className="flex justify-center items-center gap-8 flex-wrap ">
            <li>
              <button className="border-b-4  border-transparent hover:border-slate-900 transition-all duration-400 origin-center lg:text-white lg:hover:border-b-white ">Home</button>
            </li>
            <li>
              <button className="border-b-4  border-transparent hover:border-slate-900 transition-all duration-400 origin-center lg:text-white lg:hover:border-b-white ">Shop</button>
            </li>
            <li>
              <button className="border-b-4  border-transparent hover:border-slate-900 transition-all duration-400 origin-center lg:text-white lg:hover:border-b-white ">About</button>
            </li>
            <li>
              <button className="border-b-4  border-transparent hover:border-slate-900 transition-all duration-400 origin-center lg:text-white lg:hover:border-b-white ">Contact</button>
            </li>
          </ul>
        </nav>

        <div className="absolute left-8 top-8 z-20 lg:hidden">
          {showNav ? (
            <button onClick={() => setShowNav(false)}>
              <img src={closeIcon} alt="menu"></img>
            </button>
          ) : (
            <button onClick={() => setShowNav(true)}>
              <img src={menuIcon} alt="menu"></img>
            </button>
          )}
        </div>
      </header>
    </>
  );
}
<button>
  <img src={menuIcon} alt="menu"></img>
</button>;
export default Header;
