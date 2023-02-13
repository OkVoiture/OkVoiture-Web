import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";

export default function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </Router>
      </div>
  );
}
