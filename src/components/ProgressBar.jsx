import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div>
      <progress value={progress} max="100"></progress>
    </div>
  );
};

export default ProgressBar;
