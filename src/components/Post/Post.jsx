// InstagramPost.js
import { useState } from 'react';
import './post.css';

const Post = ({ username, time, mediaSrc, initialLikes, caption }) => {
    const [likes, setLikes] = useState(initialLikes); // use state to keep track of likes
    const [hasLiked, setHasLiked] = useState(false); // use state to determine if the post has been liked by the user
  
    const handleDoubleClick = () => {
      if (!hasLiked) {
        setLikes(prevLikes => prevLikes + 1); // increment likes
        setHasLiked(true); // set the post as liked
      } else {
        setLikes(prevLikes => prevLikes - 1); // decrement likes
        setHasLiked(false); // set the post as not liked
      }
    };
  return (
    <div className="post-container">
      <div className="header">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user avatar" width="32" height="32" />
        <span className="header-username">{username}</span>
        <span className="header-time">{time}</span>
      </div>
      
      <div className="media-content" onDoubleClick={handleDoubleClick}>
        <img src={mediaSrc} alt="media content" width="100%" />
      </div>
      
      <div className="footer">
        <div className="likes">{likes} likes</div>
        <div className="caption">{username} {caption}</div>
      </div>
    </div>
  );
};

export default Post;
