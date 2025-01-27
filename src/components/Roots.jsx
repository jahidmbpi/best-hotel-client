import { Outlet } from "react-router-dom";

const Roots = () => {
  return (
    <div className="sm:mx-0 md:mx-[50px] lg:mx-[90px]">
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
