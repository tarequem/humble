const fs = require("fs");
const Post = require('../models/Post');
const multer = require("multer");

const createPost = async (req, res) => {
  try {
    let post = await Post.create({ 
      title: req.body.title,
      image: req.file.path,
      user_id: req.session.user_id
    });
  } catch (err) {
    console.log(`err: ${err}`);
    return res.send(`Error when trying upload images: ${err}`);
  }
};


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

module.exports = {
    createPost,
    upload
};