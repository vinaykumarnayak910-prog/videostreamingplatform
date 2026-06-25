import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import API from "../services/api";

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/videos")
      .then((res) => setVideos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}

export default Videos;