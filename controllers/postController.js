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