import { NavLink } from "react-router-dom";
import logo from "../../assets/hotel-logo-icon-vector-hotel-logo-silhouette-building-vector-illustration_1199258-5038.avif";
import { useContext } from "react";
import { AuthContext } from "../Provider";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  console.log(logOut);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-auto text-center">
      <nav className="h-[70px] rounded-lg flex items-center justify-center my-[20px]">
        <div className="flex justify-between items-center w-full px-[10px]">
          <img
            className="h-[65px] w-[65px] rounded-lg"
            src={logo}
            alt="Hotel Logo"
          />
          <div className="flex flex-row text-black font-bold space-x-[20px] items-center">
            <NavLink to="/">home</NavLink>
            <NavLink to="/contact">contact</NavLink>
            <NavLink to="/my-booking">my booking</NavLink>
            <NavLink to="/register">register</NavLink>
            <NavLink to="/login">
              <button className="btn btn-primary">log in</button>
            </NavLink>
            <button onClick={handleLogOut} className="btn btn-primary">
              log out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
