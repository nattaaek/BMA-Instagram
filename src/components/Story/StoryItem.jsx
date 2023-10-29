import './StoryItem.css';

const StoryItem = ({ username, imgSrc }) => (
  <li className="story-item">
    <button aria-label={`Story by ${username}, not seen`} className="story-button">
      <div className="story-avatar-wrapper">
        <span className="story-avatar">
          <img alt={`${username}'s profile picture`} src={imgSrc} />
        </span>
      </div>
      <div className="story-username">{username}</div>
    </button>
  </li>
);

export default StoryItem;
