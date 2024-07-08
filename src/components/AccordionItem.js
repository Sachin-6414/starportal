import React, { useState } from 'react';
import '../App.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={onClick}>
      <span>{title}</span>
      <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
    </div>
    {isOpen && <div className="accordion-content">{content}</div>}
  </div>
);

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
    { title: 'Item 4', content: 'Content for item 4' },
    { title: 'Item 5', content: 'Content for item 5' },
    { title: 'Item 6', content: 'Content for item 6' },
  ];

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default App;
