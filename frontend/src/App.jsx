import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./components/pages/homepage";
import SingleItem from "./components/pages/homepage/singleItem/SingleItem";
import Contact from "./components/pages/contact";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
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
