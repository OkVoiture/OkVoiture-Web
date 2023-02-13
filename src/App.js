import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import PostForm from "./components/PostForm/PostForm";

export default function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/postForm" element={<PostForm/>} />
            <Route exact path="/postList" element={<PostForm/>} />
          </Routes>
        </Router>
      </div>
  );
}
