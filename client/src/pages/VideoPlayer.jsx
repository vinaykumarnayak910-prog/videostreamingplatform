import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function VideoPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    API.get(`/videos/${id}`)
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!video) return <h2>Loading...</h2>;

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>{video.title}</h2>

        <video width="700" controls>
          <source src={video.video_url} type="video/mp4" />
        </video>

        <p>{video.description}</p>
      </div>
    </>
  );
}

export default VideoPlayer;