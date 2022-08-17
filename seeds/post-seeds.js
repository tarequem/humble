const { Post } = require('../models');

const postdata = [
  {
    title: 'Welcome to Humble!',
    image: '/uploads/test_image.jpeg',
    user_id: 1,
    id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
