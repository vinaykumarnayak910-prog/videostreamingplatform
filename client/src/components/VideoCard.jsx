import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "15px",
        boxShadow: "0 2px 8px rgba(0,0,0,.2)",
      }}
    >
      <img
        src={video.thumbnail_url}
        alt={video.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{video.title}</h3>

        <p>{video.description}</p>

        <Link to={`/video/${video.id}`}>
          <button>▶ Watch</button>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;