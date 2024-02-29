import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./components/pages/homepage";
import SingleItem from "./components/pages/homepage/singleItem/SingleItem";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="singleItem" element={<SingleItem />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
