const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    id:1,
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
