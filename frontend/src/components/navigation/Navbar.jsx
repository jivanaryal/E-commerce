import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
const NavItem = [
  {
    name: "Home",
  },
  {
    name: "products",
  },
  {
    name: "contact",
  },
  {
    name: "About us",
  },
];
const Navbar = () => {
  return (
    <div className="bg-mainColor h-16 text-[#F8F8F9]  fonts ">
      <div className="flex justify-between mx-6  items-center text-lg h-full">
        <div className="left">
          <div>Logo</div>
        </div>
        <div className="flex">
          <div className="flex gap-6 mr-4  ">
            {NavItem.map((val, i) => {
              return (
                <div key={i}>
                  <div>{val.name}</div>
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
