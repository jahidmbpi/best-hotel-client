import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Roots = () => {
  return (
    <div className="sm:mx-0 md:mx-[50px] lg:mx-[90px]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
