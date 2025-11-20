import { NavLink } from "react-router";
import Button from "../../shared/button/Button";
import Circle from "../../shared/button/Circle";
import Logo from "../logo/Logo";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>Service</NavLink>
      </li>
      <li>
        <NavLink>Coverage</NavLink>
      </li>
      <li>
        <NavLink>About Us</NavLink>
      </li>
      <li>
        <NavLink>Pricing</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-8 lg:py-6 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Button>Sign In</Button>
        <div className="hidden lg:block ">
          <Button className={"bg-primary"}>Be a rider</Button>
        </div>

        <div className="-ms-4">
          <Circle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
