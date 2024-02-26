import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./components/pages/homepage";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
