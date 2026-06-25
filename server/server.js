const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/db");

const videoRoutes = require("./routes/videoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/videos", videoRoutes);

app.get("/", (req, res) => {
  res.send("🎥 Video Streaming Platform API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});