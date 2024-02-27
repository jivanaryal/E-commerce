import BestSellingProduct from "./BestSellingProduct";
import Category from "./Category";
import ExploreProducts from "./ExploreProducts";
import Slider from "./Slider";

const index = () => {
  return (
    <div className="bg-[#D9D9D9]">
      {/* This is the index page where we call all the homepage component */}
      <Slider />
      <Category />
      <BestSellingProduct />
      <ExploreProducts />
    </div>
  );
};

export default index;
