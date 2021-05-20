import { useState, useEffect } from "react";
import "./Blog.css";
import Post from "./Post";
import blogLoader from "../../assets/blog-loader.svg";
import { HiExternalLink } from "react-icons/hi";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  document.title = "Portfolio | Blog";

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=tushar_kandpal")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        // console.log(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div id="blog">
      <svg
        width="100%"
        height="1024"
        viewBox="0 0 100% 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <rect width="100%" height="1024" fill="white" />
          <path
            d="M547 610C120.5 482 -69.6667 608.667 -120 748.5L-32.5 1052.5L1558.5 1035V626C1543.67 588 1495.6 448.3 1258 563.5C961 707.5 897.735 715.262 547 610Z"
            fill="#393E46"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="100%" height="1024" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {isLoading ? (
        <img src={blogLoader} alt="loader-img" />
      ) : (
        <div className="blog-sub">
          <h2 className="section-title">BLOG</h2>
          <div id="blog-container">
            {articles.map((item) => (
              <Post {...item} key={item.id} />
            ))}
          </div>
          <a
            className="other-link"
            href="https://dev.to/tushar_kandpal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit dev.to <HiExternalLink />
          </a>
        </div>
      )}
    </div>
  );
}

export default Blog;
