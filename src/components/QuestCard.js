import React from "react";


const QuestCard = ({ title, description, tasks, imageUrl }) => (
  <div className="quest-card">
    <img src={imageUrl} alt={title} className="quest-image" />
    <div className="quest-details">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{tasks} Tasks</p>
      {/* <svg width="121" height="19" viewBox="0 0 121 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M120 7.80708C94.898 1.43658 35.7551 -5.51932 0 17.6211" stroke="#A286F2" stroke-width="2" stroke-linecap="round" stroke-dasharray="8 8"></path></svg> */}
      
    </div>
  </div>
);

export default QuestCard;
