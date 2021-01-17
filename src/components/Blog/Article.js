import React, { useState, useEffect } from "react";
import "./Article.css";

const Article = ({ match }) => {
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${match.params.id}`)
      .then((res) => res.json())
      .then((content) => {
        setArticle(content);
        // console.log(content);
        setIsLoading(false);
        document.querySelector(".article-body").innerHTML = content.body_html;
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);
  return (
    <div id="article">
      {isLoading ? (
        <img
          src="https://blog.lulu.com/wp-content/uploads/2018/11/112718_GIFs-Blog.gif"
          style={{ display: "block", width: "80vw", margin: "auto" }}
          alt="book"
        />
      ) : (
        <>
          <h1 className="article-header">{article.title}</h1>
          <div className="article-body">{article.body_html}</div>
        </>
      )}
    </div>
  );
};

export default Article;
