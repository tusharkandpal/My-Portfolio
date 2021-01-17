import { useState, useEffect } from "react";
import "./Blog.css";
import Post from "./Post";
import blogLoader from "../../assets/blog-loader.svg";
import {HiExternalLink} from 'react-icons/hi';

function Blog() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  document.title ="Portfolio | Blog";

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
      {isLoading ? (
        <img src={blogLoader} alt="loader-img" />
      ) : (
        <>
          <h2 className="section-title">BLOG</h2>
          <div id="blog-container">
            {articles.map((item) => (
              <Post {...item} key={item.id} />
            ))}
          </div>
          <a className="other-link" href="https://dev.to/tushar_kandpal" target='_blank' rel="noopener noreferrer">
        Visit dev.to <HiExternalLink/>
      </a>
        </>
      )}
    </div>
  );
}

export default Blog;
