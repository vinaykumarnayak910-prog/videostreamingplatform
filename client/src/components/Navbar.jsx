import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#111",
        color: "#fff",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🎬 StreamFlix</h2>

      <div>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/videos"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Videos
        </Link>

        <Link
          to="/upload"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Upload
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;