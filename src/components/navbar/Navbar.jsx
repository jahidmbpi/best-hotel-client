import { NavLink } from "react-router-dom";
import logo from "../../assets/hotel-logo-icon-vector-hotel-logo-silhouette-building-vector-illustration_1199258-5038.avif";
const Navbar = () => {
  return (
    <div className="m-auto text-center">
      <nav className="h-[70px]rounded-lg flex items-center justify-center my-[20px]">
        <div className="flex justify-between items-center w-full px-[10px]">
          <img className="h-[65px] w-[65px] rounded-lg" src={logo} alt="" />
          <div className="flex flex-row text-black font-bold space-x-[20px] items-center">
            <NavLink className="" to="/">
              home
            </NavLink>
            <NavLink className="" to="/contact">
              contact
            </NavLink>
            <NavLink className="" to="/my-booking">
              my booking
            </NavLink>
            <NavLink className="" to="/room">
              room
            </NavLink>
            <button className="btn btn-primary">log in</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
