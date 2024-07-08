// src/Accordion.js
import React, { useState } from 'react';
import questhead1 from "../assets/questhead1.png";
import quest1 from "../assets/quest1.png";
import quest2 from "../assets/quest2.jpg";
import quest3 from "../assets/quest3.jpg";
import quest4 from "../assets/quest4.jpg";
import quest5 from "../assets/quest5.jpg";
import quest6 from "../assets/quest6.jpg";
// import questhead2 from "../assets/questhead2.png"
// import quest21 from "../assets/quest21.jpg"
// import quest22 from "../assets/quest22.jpg"
// import quest23 from "../assets/quest23.png"
// import quest24 from "../assets/quest24.jpg"

const AccordionItem = ({ title, desc, children, isOpen, onClick, imgSrc }) => (
  <div className="accordion-item">
    <div className="mt-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 accordion-header" onClick={onClick} >
      <div>
      <img src={imgSrc} alt="quest_head1" className="quest-head" />
      {/* <span className="head-quest">6 Quests</span> */}
      </div>
      <div className="quest-heading">
        <p>{title}</p>
        <span className="desc">{desc}</span>
        <br />
        <span>------------------------------------</span>
        <br />
        <span className="xp-div">1490 XPs</span>
      </div>
      <div>
        <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>
          &#9662;
          {/* &#9650; */}
        </span>
      </div>
    </div>
    {isOpen && <div className="accordion-content">{children}</div>}
  </div>
);

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const accordionData = [
    {
      title: "#1: But what is crypto and...",
      content: "-----------------------------------",
      imgSrc: quest1,
      task: "11 Tasks",
    },
    {
      title: "#2: Setting up your we...",
      content: "-----------------------------------",
      imgSrc: quest2,
      task: "8 Tasks",
    },
    {
      title: "#3: What the heck is a...",
      content: "-----------------------------------",
      imgSrc: quest3,
      task: "8 Tasks",
    },
    {
      title: "#4: Swapping and bridging...",
      content: "-----------------------------------",
      imgSrc: quest4,
      task: "10 Tasks",
    },
    {
      title: "#5: NFTs and why they're...",
      content: "-----------------------------------",
      imgSrc: quest5,
      task: "6 Tasks",
    },
    {
      title: "#6: Doing quests and winning...",
      content: "-----------------------------------",
      imgSrc: quest6,
      task: "8 Tasks",
    },
  ];
  return (

    
    <div className="accordion-container">
        <AccordionItem
          className="accordion-item"
          title="Basics of Crypto"
          imgSrc={questhead1}
          desc="The safest and easiest place to start your crypto journey!"
          isOpen={isOpen}
          onClick={toggleAccordion}
        >
          {accordionData.map((item, index) => (
              <div key={index} className="nested-item">
                <img src={item.imgSrc} alt={item.title} className="quest-img" />
                <div>
                  <h3 className="quest-title">{item.title}</h3>
                  <p>{item.content}</p>
                  <div className="quest-content">
                    <p>{item.task}</p>
                    <div className="progress-bar"></div>
                    <div className="tick">✓</div>
                  </div>
                </div>
              </div>
          ))}
        </AccordionItem>
      </div>
  );
};

export default Accordion;