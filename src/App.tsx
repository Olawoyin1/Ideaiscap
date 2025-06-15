import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Purpose from "./pages/Purpose";
// import LastGen from "./pages/LastGen";
import Filosofi from "./pages/Filosofi";
import Socioloji from "./pages/Socioloji";
import Connect from "./pages/Connect";
import Generation from "./pages/Generation";
// import Connect from "./pages/Connect"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/last-generation" element={<Generation />} />
        <Route path="/filosofi" element={<Filosofi />} />
        <Route path="/socioloji" element={<Socioloji />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
