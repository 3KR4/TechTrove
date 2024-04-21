import React, { useState, useEffect } from 'react';
import { intervalToDuration, differenceInSeconds } from 'date-fns';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = differenceInSeconds(targetDate, now);
    return intervalToDuration({ start: 0, end: difference * 1000 });
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="timer">
      <div className="days">
        <span>{days ? days : 0}</span>
        <h4>Days</h4>
      </div>
      <div className="hours">
        <span>{hours ? hours : 0}</span>
        <h4>Hours</h4>
      </div>
      <div className="minutes">
        <span>{minutes ? minutes : 0}</span>
        <h4>Minutes</h4>
      </div>
      <div className="seconds">
        <span>{seconds ? seconds : 0}</span>
        <h4>Seconds</h4>
      </div>
    </div>
  );
};

export default CountdownTimer;
