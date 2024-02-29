// This is category section
import { IoIosPhonePortrait } from "react-icons/io";

const CatContent = [
  {
    name: "phones",
    logos: <IoIosPhonePortrait />,
  },
  {
    name: "phones",
    logos: <IoIosPhonePortrait />,
  },
  {
    name: "phones",
    logos: <IoIosPhonePortrait />,
  },
  {
    name: "phones",
    logos: <IoIosPhonePortrait />,
  },
  {
    name: "phones",
    logos: <IoIosPhonePortrait />,
  },
];

const Category = () => {
  return (
    <div className="pb-10 bg-white pt-10 fonts border-2">
      <div className="main   mx-4">
        <div className="header flex justify-between items-center ">
          <h1 className="text-2xl text-black">Categories</h1>
          <button className="bg-[#00ABE4] py-1 px-3 rounded-md">
            View all
          </button>
        </div>
        <div className="content flex justify-around items-center   pt-10 ">
          {CatContent.map((val, i) => {
            return (
              <div
                key={i}
                className="border-[1px] rounded-md border-gray-800 w-40 py-10 flex items-center justify-center flex-col"
              >
                <div className="text-3xl">{val.logos}</div>
                <div className="text-lg">{val.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
