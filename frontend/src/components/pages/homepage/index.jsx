import BestSellingProduct from "./BestSellingProduct";
import Category from "./Category";
import ExploreProducts from "./ExploreProducts";
import Slider from "./Slider";
import Team from "./Team";
import Testimonials from "./Testimonials";

const index = () => {
  return (
    <div className="bg-[#D9D9D9]">
      {/* This is the index page where we call all the homepage component */}
      <Slider />
      <Category />
      <ExploreProducts />
      <BestSellingProduct />
      <Testimonials />
      <Team />
    </div>
  );
};

export default index;
