import { MdOutlineStarPurple500 } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { SiCashapp } from "react-icons/si";

const SingleItem = () => {
  const location = useLocation();
  console.log(location.state.image);
  return (
    <div>
      <div>
        <div className="main grid grid-cols-12 p-6">
          <div className="left col-span-4">
            <img src={location.state.image} alt="" />
          </div>
          <div className="middle col-span-5">
            <div className="title">{location.state.name}</div>
            <div className="flex">
              <div className="star">
                <div className="flex text-orange-500 items-center">
                  <div>
                    <MdOutlineStarPurple500 />
                  </div>
                  <div>
                    <MdOutlineStarPurple500 />
                  </div>
                  <div>
                    <MdOutlineStarPurple500 />
                  </div>
                  <div>
                    <MdOutlineStarPurple500 />
                  </div>
                  <div className="text-gray-300">
                    <MdOutlineStarPurple500 />
                  </div>
                  <div className="text-thirdColor">(65)</div>
                </div>
              </div>
              <div className="number">135 Ratings</div>
            </div>
            <div className="brand">
              <div className="brand">
                Brand :<span>No Brand</span>
                <span>|</span>
                <span>More Mobile Accessories from No Brand</span>
              </div>
            </div>
            <hr className=" my-10" />
            <div className="price text-orange-500">
              {location.state.newprice}
            </div>
            <div className="flex gap-5 items-center">
              <div>Quality</div>
              <div>-</div>
              <div>1</div>
              <div>
                <CiSquarePlus className="text-4xl" />
              </div>
            </div>
            <div className="buttons">
              <button className="buy w-5/12 mr-4 bg-blue-500 text-white py-3  rounded-sm">
                Buy Now
              </button>
              <button className="buy w-5/12 bg-orange-600 text-white py-3  rounded-sm ">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="right p-2 col-span-3 bg-gray-100 text-black">
            <p>Delivery</p>
            <div className="flex gap-4 items-center">
              <div className="logo">
                <IoLocationOutline />
              </div>
              <div className="name mr-4">
                <p>Bagmati,Kathmandu Metro</p>
                <p>22-Newroad Area, Newroad</p>
              </div>
              <button className="text-mainColor">Change</button>
            </div>
            <hr />
            <div className="flex gap-2 ">
              <div className="logo">
                <IoLocationOutline />
              </div>
              <div className="name">
                <p>
                  Free Delivery <span>3 Mar -</span> <span>4 Mar</span>
                </p>
                <p>3-4 day(s)</p>
                <button className="bg-white border-[1px] shadow-md text-sm py-1">
                  Enjoy free shipping promotion with minimum spend of Rs. 699
                  from <span>EBox</span>
                </button>
              </div>
              <button className="text-mainColor mb-8">Change</button>
            </div>
            <div className="flex items-center gap-3">
              <div className="logo">
                <SiCashapp />
              </div>
              <p>
                {" "}
                Cash and delivery Available from <span>EBox</span>
              </p>
            </div>
            <hr className="my-5" />
            <p>Services</p>
            <div className="flex items-center gap-3">
              <div className="logo">
                <SiCashapp />
              </div>
              <p>
                {" "}
                Cash and delivery Available from <span>EBox</span>
              </p>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div className="logo">
                <SiCashapp />
              </div>
              <p>
                {" "}
                Cash and delivery Available from <span>EBox</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
