import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/feature/user/userSlice";

const Navbar = () => {
  const {user, isLoading, isError, error}= useAppSelector(state=>state.user);
  console.log(isLoading);
console.log(user);
console.log(isError);
console.log(error);
const dispatch=useAppDispatch()
  const logoutHandler= ()=>{
    signOut(auth).then(() => {
    dispatch(setUser(null))
    })
  }

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
                <Link to="/all-books">All Books</Link>
              </li>
              <li>
              {
       
       user.email &&   <Link to="/add-new-book">Add New Book</Link>

          }
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            BookStack
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/all-books">All Books</Link>
            </li>
            <li>
              {
       
          
       user.email &&                <Link to="/add-new-book">Add New Book</Link>

          }
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            !user.email &&  <Link
            to="/login"
            className="btn bg-primary text-white hover:bg-black"
          >
            Sign In
          </Link>
          }
          {
       
          
       user.email &&   <button onClick={logoutHandler}  className="btn bg-primary text-white hover:bg-black">LogOut</button>
          }
         
        </div>
      </div>
    </section>
  );
};

export default Navbar;
