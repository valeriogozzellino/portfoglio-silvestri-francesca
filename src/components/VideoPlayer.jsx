'use client'

import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ src }) => {
  return (
    <div>
      <h1>my custom player</h1>

      <ReactPlayer
        width='500px'
        height='400px'
        url={src}
        controls={true}
        light={false}
        // picture in picture
        pip={true}
      />
    </div>
  )
}

export default VideoPlayer
