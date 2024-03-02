import profile from "../../../assets/images/profile.jpeg";
import { GoDotFill } from "react-icons/go";

const TeamDetails = [
  {
    photo: profile,
    title: "Sushant Shrestha",
    position: "designer",
    about:
      "sushant is the visionary leader with a passion for technology and innovation",
  },
  {
    photo: profile,
    title: "Sushant Shrestha",
    position: "designer",
    about:
      "sushant is the visionary leader with a passion for technology and innovation",
  },
  {
    photo: profile,
    title: "Sushant Shrestha",
    position: "designer",
    about:
      "sushant is the visionary leader with a passion for technology and innovation",
  },
  {
    photo: profile,
    title: "Sushant Shrestha",
    position: "designer",
    about:
      "sushant is the visionary leader with a passion for technology and innovation",
  },
  {
    photo: profile,
    title: "Sushant Shrestha",
    position: "designer",
    about:
      "sushant is the visionary leader with a passion for technology and innovation",
  },
  {
    photo: profile,
    title: "Sushant Shrestha",
    position: "designer",
    about:
      "sushant is the visionary leader with a passion for technology and innovation",
  },
];

const Team = () => {
  return (
    <div className="bg-white border-2 p-14  rounded-md">
      <h1 className="text-3xl  text-black ">Meet Our Team</h1>
      <p className="text-white text-lg pb-10 pt-4">
        Get to know the talented individuals behind our compnay
      </p>
      <div className="grid grid-cols-4  gap-y-10">
        {TeamDetails.map((val, i) => {
          return (
            <div
              key={i}
              className="w-64 rounded-b-xl  bg-white shadow-mainColor border-[1px] shadow-md flex flex-col items-center rounded-t-xl    outline-none hover:scale-105 transition-all duration-700 delay-100"
            >
              <img
                src={val.photo}
                alt="photo"
                className=" w-full h-48 rounded-t-xl bg-red-500"
              />
              <div className="flex flex-col items-center gap-2  pb-8">
                <div className="position text-gray-600 pt-3">
                  {val.position}
                </div>
                <div className="name font-bold ">{val.title}</div>
                <div className="flex text-xl text-gray-500 rounded-xl">
                  <GoDotFill />
                  <GoDotFill />
                  <GoDotFill />
                </div>
                {/* <div className="about text-sm px-2 pb-4">{val.about}</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
