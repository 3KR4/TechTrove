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
  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  return (
    <div className="timer">
      <div className="days">
        <span>{days ? formatTime(days) : `00`}</span>
        <h4>Days</h4>
      </div>
      <div className="hours">
        <span>{hours ? formatTime(hours) : `00`}</span>
        <h4>Hours</h4>
      </div>
      <div className="minutes">
        <span>{minutes ? formatTime(minutes) : `00`}</span>
        <h4>Minutes</h4>
      </div>
      <div className="seconds">
        <span>{seconds ? formatTime(seconds) : `00`}</span>
        <h4>Seconds</h4>
      </div>
    </div>
  );
};

export default CountdownTimer;
