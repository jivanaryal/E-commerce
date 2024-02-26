import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="w-[97%] mx-auto bg-gray-800">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
