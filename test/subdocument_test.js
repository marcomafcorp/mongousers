const assert = require('assert');
const User = require('../src/usr');

describe('Subdocumetns', () => {
  it('can create a Subdocumetn'), (done) => {
    const joe = new User({
      name: 'Joe',
      post: [{ title: 'PostTitle' }]})
  });

  joe.save()
    .then(() => User.findOne({ name: 'Joe' }}))
    .then((user) => {
       assert(user.posts[0].title === 'PostTitle');
       done();
    });
});
