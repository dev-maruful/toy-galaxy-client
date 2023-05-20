import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      {user && (
        <li>
          <Link to="/myToys">My Toys</Link>
        </li>
      )}
      {user && (
        <li>
          <Link to="/addAToy">Add a Toy</Link>
        </li>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img
                src="/logo.png"
                className="h-14 w-14 md:h-20 md:w-20"
                alt=""
              />
              <h3 className="text-xl md:text-5xl font-semibold hover:bg-base-300 hover:rounded-xl p-3">
                Toy Galaxy
              </h3>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user && user?.photoURL && (
            <div
              className="avatar tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div className="w-12 mr-1 md:mr-2 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
          {user && !user?.photoURL && (
            <div
              className="avatar tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div className="w-12 rounded-full mr-1 md:mr-2">
                <img src="https://img.freepik.com/free-icon/user_318-552176.jpg?size=626&ext=jpg&ga=GA1.1.857116354.1678803730&semt=sph" />
              </div>
            </div>
          )}
          {user ? (
            <button onClick={handleLogout} className="btn btn-error">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
