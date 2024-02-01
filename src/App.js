import "./styles.css";
import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer.jsx";
import ProgressBar from "./components/ProgressBar";
import Ticker from "./components/Ticker";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [ticked, setTicked] = useState(false);

  const handleProgress = ({ played }) => {
    const progressPercentage = played * 100;
    setProgress(progressPercentage);

    // Check if video is fully played
    if (progressPercentage === 100) {
      setTicked(true);
    }
  };

  return (
    <div>
      <VideoPlayer
        url="https://www.w3schools.com/html/mov_bbb.mp4"
        onProgress={handleProgress}
      />
      <ProgressBar progress={progress} />
      <Ticker ticked={ticked} />
    </div>
  );
};

export default App;
