import React from "react";

export default function video({ video }) {
  return (
    <div>
      <img src={video.image} alt="broken" />
      <div className="name">{video.name}</div>
      <div className="duration">{video.duration}</div>
    </div>
  );
}
