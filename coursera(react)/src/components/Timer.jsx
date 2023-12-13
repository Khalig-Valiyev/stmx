import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTime = new Date().toLocaleTimeString().slice(0, 7);
      setTime(updatedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2 style={{ display: "inline" }}>Timer: </h2>
      <h2 style={{ display: "inline" }}>{time}</h2>
    </div>
  );
};

export default Timer;
