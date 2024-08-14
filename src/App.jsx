import "./App.css";
import Allpages from "./Components/AllPages/Allpages";
import Buttons from "./Components/Buttons/Buttons";
import DashBord from "./Components/DashBorad/DashBord";
import Display from "./Components/Display";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Navigation */}
      

      {/* Main content */}
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/allpages" element={<Allpages />} />
        <Route path="/Buttons" element={<Buttons /> } />
        <Route path="/Desktop" element={<DashBord />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
