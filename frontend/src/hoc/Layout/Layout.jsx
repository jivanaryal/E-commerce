import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import { useEffect, useState } from "react";

const Layout = () => {
  const [scroll,setScroll] = useState(false);
  const handleScroll = ()=>{
    if(window.scrollY>10){
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  }
  useEffect(()=>{
window.addEventListener("scroll",handleScroll);
return()=>{
  window.removeEventListener("scroll",handleScroll);
}
  },[])
  return (
    <div>
      <div className={` z-10 ${scroll? "sticky top-0 left-0":"sticky top-0 left-0"}`}>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
