import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.scss";

import Home from "./pages/Home";
import Images from "./pages/Images";
import Sheets from "./pages/Sheets";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/images" element={<Images />} />
          <Route path="/sheets" element={<Sheets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
