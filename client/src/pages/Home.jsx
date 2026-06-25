import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h1>🎬 Video Streaming Platform</h1>

        <p>Watch and Upload Videos</p>

        <div style={{ marginTop: "30px" }}>
          <Link to="/videos">
            <button style={{ marginRight: "20px" }}>
              Browse Videos
            </button>
          </Link>

          <Link to="/upload">
            <button>
              Upload Video
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;