import { TbTruckDelivery } from "react-icons/tb";
const serviceItem = [
  {
    logo: <TbTruckDelivery />,
    title: "FAST AND FAST DELIVERY",
    about: "free delivery all over the place",
  },
  {
    logo: <TbTruckDelivery />,
    title: "FAST AND FAST DELIVERY",
    about: "free delivery all over the place",
  },
  {
    logo: <TbTruckDelivery />,
    title: "FAST AND FAST DELIVERY",
    about: "free delivery all over the place",
  },
];

const Services = () => {
  return (
    <div className="py-32">
      <div className="flex justify-center gap-20">
        {serviceItem.map((val, i) => {
          return (
            <div key={i} className="flex flex-col  items-center">
              <div className="border-2 rounded-full border-black ">
                <div className="text-2xl p-2">{val.logo}</div>
              </div>
              <div className="font-black">{val.title}</div>
              <div className="text-xs">{val.about}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
