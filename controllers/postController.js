const fs = require("fs");
const Post = require('../models/Post');
const multer = require("multer");

const createPost = async (req, res) => {
  try {
    let post = await Post.create({ 
      title: req.title,
      image: req.file,
      user_id: req.session.user_id
    });
    console.log(`==== post is ${post}`);
    res.status(200).send(post);
  } catch (error) {
    console.log(`err: ${err}`);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'Images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: '1000000' },
//   fileFilter: (req, file, cb) => {
//       const fileTypes = /jpeg|jpg|png/;
//       const mimeType = fileTypes.test(file.mimetype);
//       const extname = fileTypes.test(path.extname(file.originalname));

//       if(mimeType && extname) {
//           return cb(null, true);
//       }
//       cb('Give proper files formate to upload');
//   }
// }).single('image');

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