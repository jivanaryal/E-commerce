import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
const NavItem = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "products",
    path: "/products",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "About us",
    path: "/about",
  },
];
const Navbar = () => {
  return (
    <div className="bg-mainColor h-16 text-[#F8F8F9]   fonts ">
      <div className="flex justify-between mx-6  items-center text-lg h-full">
        <div className="left">
          <div>
            <img src={logo} alt="logo" className="w-12 rounded-full h-12" />
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-6 mr-4  ">
            {NavItem.map((val, i) => {
              return (
                <div key={i}>
                  <Link to={val.path}>
                    {" "}
                    <div>{val.name}</div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mr-4 relative ">
            <input
              type="search"
              name="search"
              id="search"
              className="h-8 w-96 rounded-md"
            />
            <CiSearch className="absolute top-2 text-xl text-black right-2" />
          </div>
        </div>
        <div className="flex items-center justify-center   gap-10 text-lg">
          <IoMdCart className="text-2xl" />
          <div>Signup</div>
          <div>Login</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
