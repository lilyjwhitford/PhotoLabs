import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topic, onTopicClick }) => {

  return (
    <div className="topic-list__item" onClick={() => onTopicClick(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
