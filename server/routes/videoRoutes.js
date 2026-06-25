const express = require("express");

const router = express.Router();

const {
  getVideos,
  getVideoById,
  addVideo,
  deleteVideo,
} = require("../controllers/videoController");

router.get("/", getVideos);

router.get("/:id", getVideoById);

router.post("/", addVideo);

router.delete("/:id", deleteVideo);

module.exports = router;