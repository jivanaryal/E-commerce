import Category from "./Category";
import Slider from "./Slider";

const index = () => {
  return (
    <div className="bg-[#D9D9D9]">
      {/* This is the index page where we call all the homepage component */}
      <Slider />
      <Category />
    </div>
  );
};

export default index;
