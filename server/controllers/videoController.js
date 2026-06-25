const db = require("../config/db");

// GET ALL VIDEOS
exports.getVideos = (req, res) => {
  db.query(
    "SELECT * FROM videos ORDER BY created_at DESC",
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
};

// GET VIDEO BY ID
exports.getVideoById = (req, res) => {
  db.query(
    "SELECT * FROM videos WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result[0]);
    }
  );
};

// ADD VIDEO
exports.addVideo = (req, res) => {
  const {
    title,
    description,
    video_url,
    thumbnail_url,
  } = req.body;

  db.query(
    "INSERT INTO videos(title,description,video_url,thumbnail_url) VALUES(?,?,?,?)",
    [title, description, video_url, thumbnail_url],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.status(201).json({
        message: "Video Uploaded Successfully"
      });
    }
  );
};

// DELETE VIDEO
exports.deleteVideo = (req, res) => {
  db.query(
    "DELETE FROM videos WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Video Deleted"
      });
    }
  );
};