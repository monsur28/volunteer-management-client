import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/photo_5910395919155704695_y.jpg";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? savedTheme : "light";
  });
  const [nav, setNav] = useState(false);

  const handleToggle = (e) => {
    const selectedTheme = e.target.checked ? "dark" : "light";
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header className=" p-5 mb-4 rounded-2xl sticky top-0">
      <div className="flex">
        <a href="/" className="flex gap-2">
          <img src={logo} alt="" className="w-12 rounded-full" />
          <h1 className="my-auto font-bold text-[22px] lg:text-3xl uppercase pr-2 mr-2 border-r-2 border-purple-500 lg:pr-5 lg:mr-5">
            Goodwish
          </h1>
        </a>
        <span className="my-auto ml-12 lg:hidden" onClick={() => setNav(!nav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </span>
        <div className="my-auto">
          <ul className="hidden lg:flex uppercase font-bold">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/needVolunteer"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
                Need Volunteer
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="flex ml-[450px] justify-center items-center">
          <label className="swap swap-rotate mr-5">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        </div>
        <div className="dropdown dropdown-end my-auto ml-auto flex text-black dark:text-slate-950 font-bold p-1 rounded lg:rounded-xl lg:px-5 lg:py-2">
          <div></div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      {nav && (
        <div
          id="menu"
          className="mt-5 p-5 mr-24 bg-white border-2 border-purple-500 rounded-2xl"
          onClick={() => setNav(!nav)}
        >
          <ul className="font-bold ">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-purple-500">Home</li>
            </NavLink>
            <NavLink
              to="/needVolunteer"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-purple-500">Need Volunteer</li>
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
