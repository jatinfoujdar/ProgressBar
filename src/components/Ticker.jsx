// Ticker.js
import React from "react";

const Ticker = ({ ticked }) => {
  return <div>{ticked && <span>&#10003; Video Completed</span>}</div>;
};

export default Ticker;
