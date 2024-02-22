const NavItem = [
  {
    name: "Home",
  },
  {
    name: "products",
  },
  {
    name: "contact",
  },
  {
    name: "About us",
  },
];
const Navbar = () => {
  return (
    <div>
      <div className="main">
        <div className="left">
          <div>Logo</div>
        </div>
        <div className="middle">
          {NavItem.map((val, i) => {
            return (
              <div key={i}>
                <div>{val.name}</div>
              </div>
            );
          })}
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Navbar;
