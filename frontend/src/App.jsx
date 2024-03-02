import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./components/pages/homepage";
import SingleItem from "./components/pages/homepage/singleItem/SingleItem";
import Contact from "./components/pages/contact";
import Signup from "./components/pages/signup/Signup";
import Login from "./components/pages/login/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="singleItem" element={<SingleItem />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
