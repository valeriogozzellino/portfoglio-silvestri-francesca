"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const YouTubePlayer = ({ url, width, height, className }) => {
  return (
    <ReactPlayer
      url={url}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default YouTubePlayer;
