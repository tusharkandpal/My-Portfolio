import "./App.css";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import Blog from "./components/Blog/Blog";
import Article from "./components/Blog/Article";
import Footer from "./components/Footer/Footer";
import {
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineBookOpen,
} from "react-icons/hi";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

function App() {
  const handleClick = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };

  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          
          {/* Navbar */}
          <ul id="home-nav">
            <li className="nav-link">
              <Link to="/">
                <HiOutlineHome size={30} />
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/work">
                <HiOutlineBriefcase size={30} />
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/blog">
                <HiOutlineBookOpen size={30} />
              </Link>
            </li>
            <li className="nav-link">
              <button id="theme-btn" onClick={handleClick}></button>
            </li>
          </ul>
          {/* Components */}
          <Route path="/" exact component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/blog" component={Blog} />
          <Route path="/article/:id" component={Article} />
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
