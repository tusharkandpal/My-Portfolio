import React from "react";
import { MdDateRange } from "react-icons/md";
import { BiLike, BiComment } from "react-icons/bi";
import {Link} from 'react-router-dom';

const Post = ({
  title,
  cover_image,
  readable_publish_date,
  public_reactions_count,
  comments_count,
  id
}) => {
  return (
    <div className="post">
      <h4 className="post-title">{title}</h4>
      <div className="post-info">
          <Link to={`/article/${id}`}><img className="post-img" src={cover_image} alt={title}/></Link>
        <div className="post-details">
          <p className='post-date'>
            <MdDateRange size={20}/>
            {readable_publish_date}
          </p>
          <p className="post-stats">
            <BiLike size={20}/>
            {public_reactions_count} {}
            <BiComment size={20}/>
            {comments_count}
          </p>
        </div>
        </div>
    </div>
  );
};

export default Post;
