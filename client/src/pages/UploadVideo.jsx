import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function UploadVideo() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    video_url: "",
    thumbnail_url: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/videos", form);
      alert("Video Uploaded Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>Upload Video</h2>

        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="video_url"
          placeholder="Video URL"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="thumbnail_url"
          placeholder="Thumbnail URL"
          onChange={handleChange}
        />
        <br /><br />

        <button onClick={handleSubmit}>Upload</button>
      </div>
    </>
  );
}

export default UploadVideo;