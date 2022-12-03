import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetList from "./views/GetList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetList />} />
      </Routes>
    </Router>
  );
}

export default App;
