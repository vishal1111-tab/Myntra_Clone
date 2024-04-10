import React, { useState, useEffect } from "react";

const SaleCountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  function calculateTimeRemaining() {
    const endTime = new Date("2024-02-20T00:00:00Z"); // Set your sale end time
    const currentTime = new Date();
    const timeDifference = endTime - currentTime;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    } else {
      // Sale has ended
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  }

  return (
    <div>
      <div className="SaleContainer">
        <p className="pSale">SALE ENDS IN</p>
        <p className="ptime">
          {timeRemaining.days} <span className="sDay">Day</span>{" "}
          <span className="dot">:</span> {timeRemaining.hours}{" "}
          <span className="sDay">H </span> <span className="dot">:</span>{" "}
          {timeRemaining.minutes} <span className="sDay">M </span>{" "}
          <span className="dot">:</span> {timeRemaining.seconds} S
        </p>
      </div>
      <img className="SaleImg" src="images/Sale.jpg" alt="Myntra Home" />
    </div>
  );
};

export default SaleCountdownTimer;
