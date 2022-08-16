const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    user_post: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_post: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_post: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    user_post: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    user_post: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_post: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_post: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_post: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    user_post: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    user_post: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_post: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_post: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    user_post: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    user_post: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_post: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_post: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    user_post: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    user_post: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    user_post: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_post: 'https://java.com/at/nibh/in.png',
    user_id: 7,
    image: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
