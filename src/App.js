import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
