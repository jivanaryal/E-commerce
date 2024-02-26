import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
