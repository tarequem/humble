const { Vote } = require('../models');

const votedata = [
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
