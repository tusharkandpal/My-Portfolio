import { Link } from "react-router-dom";
import "./Home.css";
import work from "../../assets/work-pic.svg";
import blog from "../../assets/blog-pic.svg";
import logo from "../../assets/logo.png";
import { BiDownload } from "react-icons/bi";

function Home() {
  document.title = "Portfolio | Home";

  return (
    <div id="home">
      <svg
        id="home-svg"
        width="100%"
        height="750"
        viewBox="0 0 100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <rect width="100%" height="1024" />
          <path
            d="M504.5 290C89.5483 481.062 -61.5 190.5 -122 77.5L-69.5 -83.5L1602 -211C1813 -94.8333 1911.92 377.102 1741 475L1737.01 477.284C1578.91 567.863 1336.68 706.637 1083 577C833.5 449.5 820.5 144.5 504.5 290Z"
            fill="#393E46"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="100%" height="1024" />
          </clipPath>
        </defs>
      </svg>
      <div className="home-intro">
        <h1 className="home-intro-header">
          Hi
          <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            width="45px"
            alt="waving-hand"
          />{" "}
          I'm Tushar
        </h1>
        <p className="home-intro-info">
          - a passionate <span style={{ fontWeight: "800" }}>Front-end </span>
          developer
        </p>
      </div>
      <div id="home-sub">
        <div className="home-section">
          <img
            className="home-section-img"
            id="imgWork"
            src={work}
            alt="work"
          />
          <div className="home-section-sub">
            <h1 className="home-section-header">Projects</h1>
            <p className="home-section-info">
              List of main projects I've shared online.
            </p>
            <Link to="/work" className='home-link'>Browse Projects</Link>
          </div>
        </div>
        <div className="home-section">
          <div className="home-section-sub">
            <h1 className="home-section-header">Blog</h1>
            <p className="home-section-info">
              Read & gain knowledge through various articles.
            </p>
            <Link to="/blog" className='home-link'>Read here!</Link>
          </div>
          <img className="home-section-img" src={blog} alt="blog" />
        </div>

        <div className="home-section">
          <img src={logo} alt="profile" id="profile-pic" />
          <div className="home-section-sub">
            <h1 className="home-section-header">Few things about me..</h1>
            <p className="home-section-info">
              - B.Tech in Electrical Engineering (2020).
            </p>
            <p className="home-section-info">
              - Leisure interests include writing articles, singing & sometimes
              cooking.
            </p>
            <p className="home-section-info">
              - A kind human being & good listener.
            </p>
            <p className="home-section-info">- Always a learner.</p>
            <a
              href="https://drive.google.com/file/d/1Qm4bZvCRqK5AXrobtZLowsrUjazc9k_F/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className='home-link'
            >
              <BiDownload /> Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
