import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-base-100 shadow-sm border-blue-300 ">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <a>All Books</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BookStack</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <a>All Books</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-primary text-white hover:bg-black">Sign In</a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;