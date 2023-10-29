// StoryList.js

import './StoryList.css';
import StoryItem from './StoryItem';

const StoryList = ({ stories }) => {
  return (
    <ul className="story-list">
      {stories.map(story => (
        <StoryItem key={story.username} username={story.username} imgSrc={story.imgSrc} />
      ))}
    </ul>
  );
};

export default StoryList;
