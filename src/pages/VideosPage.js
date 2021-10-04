import React, { useState } from "react";
import Video from "../components/video";

const VIDEOS = [
  {
    id: 1,
    name: "video 1",
    duration: "123",
    image: "asdfa",
  },
  {
    id: 2,
    name: "video 2",
    duration: "12",
    image: "asdfas",
  },
  {
    id: 3,
    name: "video 3",
    duration: "32",
    image: "dasfasdf",
  },
];

export default function VideosPage() {
  const [videos, setVideos] = useState(VIDEOS);

  const renderVideos = () => {
    return videos.map((v) => <Video key={v.id} video={v} />);
  };

  return <div>{renderVideos()}</div>;
}
