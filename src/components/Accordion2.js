// src/Accordion.js
import React, { useState } from 'react';
import questhead2 from "../assets/questhead2.png"
import quest21 from "../assets/quest21.jpg"
import quest22 from "../assets/quest22.jpg"
import quest23 from "../assets/quest23.png"
import quest24 from "../assets/quest24.jpg"

const AccordionItem = ({ title, desc, children, isOpen, onClick, imgSrc, xp }) => (
  <div className="accordion-item2">
    <div className="accordion-header2" onClick={onClick} >
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
        <span className="xp-div">{xp}</span>
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

  const accordionData1 = [
    {
      title: "#1: What are airdrops, and...",
      content: "-----------------------------------",
      imgSrc: quest21,
      task: "11 Tasks",
    },
    {
      title: "#2: Types of airdrops",
      content: "-----------------------------------",
      imgSrc: quest22,
      task: "8 Tasks",
    },
    {
      title: "#3: How to earn huge $$$...",
      content: "-----------------------------------",
      imgSrc: quest23,
      task: "8 Tasks",
    },
    {
      title: "#4: Things to keep in mind",
      content: "-----------------------------------",
      imgSrc: quest24,
      task: "10 Tasks",
    },
  ];
  return (

    <>
    <div className="accordion-container2">
        <AccordionItem
          className="accordion-item"
          title="Introduction to Airdrops"
          imgSrc={questhead2}
          desc="Your best bet to make it big in crypto!"
          isOpen={isOpen}
          xp="1040 XPs"
          onClick={toggleAccordion}
        >
          {accordionData1.map((item, index) => (
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
      </>
  );
};

export default Accordion;