import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Support from "./Components/Support";
import NotFound from "./Components/NotFound";
import About from "./Components/About";
import Labs from "./Labs";
import MainHeader from "./Components/MainHeader";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/support">support</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/labs">labs</NavLink>
          </li>
          <li>
            <NavLink to="*">notfound</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/support" element={<Support></Support>} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
