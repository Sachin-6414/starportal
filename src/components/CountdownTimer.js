// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import backgroundImage from "../assets/timer-bg.png"

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-20') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <span className="text-4xl font-bold">{String(timeLeft[interval]).padStart(2, '0')}</span>
        <span className="uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <div
      className="text-gray-300 p-4 rounded-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex space-x-4">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
    </div>
  );
};

export default CountdownTimer;
