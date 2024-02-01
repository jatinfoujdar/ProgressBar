import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, onProgress }) => {
  return <ReactPlayer url={url} controls onProgress={onProgress} />;
};

export default VideoPlayer;
