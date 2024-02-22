import { useEffect, useState } from "react";
import url1 from "../../../assets/images/sliderImg.jpg";
import url2 from "../../../assets/images/image4.jpg";
import url3 from "../../../assets/images/image3.png";

// This is slider page

const slideItem = [url1, url2, url3];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const showNextImage = () => {
    setIndex((index) => {
      if (index === slideItem.length - 1) return 0;
      return index + 1;
    });
  };

  const PreviousItem = () => {
    setIndex((index) => {
      if (index === 0) return slideItem.length - 1;
      return index - 1;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextImage();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-[1400px] w-full h-[700px]  mx-auto my-0">
      <div className="w-10/12 mx-auto h-full flex overflow-hidden ">
        {slideItem.map((val, i) => {
          return (
            <div key={i} className="flex-none">
              <img
                src={val}
                alt=""
                className=" slide-image object-cover w-full mx-auto h-full"
                style={{ translate: `${-100 * index}%` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
