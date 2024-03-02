import phone from "../../../assets/images/samsung.jpg";
import laptop from "../../../assets/images/laptop-png-6778.png";
import airpod from "../../../assets/images/airpod.png";
import { MdDashboard, MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";

export const sellingContent = [
  {
    name: "Airpods pro",
    newprice: 100,

    image: airpod,
  },
  {
    name: "Samsung s23 ultra",
    newprice: 200,

    image: phone,
  },
  {
    name: "Dell Laptop",
    newprice: 300,

    image: laptop,
  },
  {
    name: "Airpods pro",
    newprice: 400,

    image: airpod,
  },
  {
    name: "Samsung s23 ultra",
    newprice: 500,

    image: phone,
  },
  {
    name: "Dell Laptop",
    newprice: 600,

    image: laptop,
  },
  {
    name: "Airpods pro",
    newprice: 700,

    image: airpod,
  },
  {
    name: "Samsung s23 ultra",
    newprice: 800,

    image: phone,
  },
  {
    name: "Dell Laptop",
    newprice: 50,

    image: laptop,
  },
];

const Products = () => {
  const [filtering, setFiltering] = useState(sellingContent);

  const handleChange = (event) => {
    let newItem;
    if (event.target.value === "high") {
      newItem = [...filtering].sort((p1, p2) => p2.newprice - p1.newprice);
    } else if (event.target.value === "low") {
      newItem = [...filtering].sort((p1, p2) => p1.newprice - p2.newprice);
    } else {
      newItem = sellingContent;
    }
    setFiltering(newItem);
  };

  return (
    <div className="w-10/12 mx-auto pt-10">
      {/* Top Box  */}
      <div className="top flex justify-between items-center">
        <div className="left">
          338 items found for{" "}
          <span className="text-mainColor">"Indian Snacks"</span>
        </div>
        <div className="right flex items-center">
          <p>Sort By:</p>
          <select
            className="border-2 py-2 rounded-xl mx-4 w-56 px-1"
            onChange={handleChange}
          >
            <option value="best">Best Match</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <p className="text-sm">View: </p>
          <MdDashboard />
          <AiOutlineMenuUnfold />
        </div>
      </div>
      <hr className="my-5" />

      {/* Products Items  */}
      <div className="grid grid-cols-4 gap-10 pt-10 items-center">
        {filtering.map((val, i) => (
          <div
            key={i}
            className="w-72 h-80 gap-2 flex flex-col items-center hover:shadow-2xl"
          >
            <img src={val.image} alt={val.name} className="h-40" />
            <div>{val.name}</div>
            <div className="flex items-center gap-2">
              <MdOutlineStarPurple500 className="text-orange-500" />
              <div>4.6/5</div>
            </div>
            <div>free delivery</div>
            <div className="text-mainColor">Rs. {val.newprice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
