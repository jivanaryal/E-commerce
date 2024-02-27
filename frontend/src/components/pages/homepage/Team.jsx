import profile from "../../../assets/images/profile.jpeg";

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
    <div className="bg-white">
      <h1 className="text-2xl ml-4 text-black">Our Teams</h1>
      <div className="grid grid-cols-4 place-items-center  gap-4">
        {TeamDetails.map((val, i) => {
          return (
            <div
              key={i}
              className="border-2 w-80 p-3 shadow-md flex flex-col items-center rounded-xl  outline-none"
            >
              <img
                src={val.photo}
                alt="photo"
                className=" w-full h-52 rounded-xl bg-red-500"
              />
              <div className="name font-bold">{val.title}</div>
              <div className="position items-start">{val.position}</div>
              <div className="about text-sm px-2 pb-4">{val.about}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;