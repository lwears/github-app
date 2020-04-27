const assert = require('assert');
const request = require('supertest');
const app = require('../app.js');

const mockUser = {
  login: 'lwears',
  id: 13499003,
  avatar_url: 'https://avatars0.githubusercontent.com/u/13499003?v=4',
  html_url: 'https://github.com/lwears',
  public_repos: 10,
  followers: 6,
  following: 1,
  created_at: '2015-07-25',
  bio:
    'I am an enthusiastic and amiable Developer with a strong passion for all things technical. Why coding? Simply because I have a thirst for knowledge!',
  name: 'Liam Wears',
};

const mockRepo = {
  id: 76954504,
  name: 'react-tetris',
  full_name: 'chvin/react-tetris',
  homepage: 'https://chvin.github.io/react-tetris/?lan=en',
  url: 'https://api.github.com/repos/chvin/react-tetris',
  description: 'Use React, Redux, Immutable to code Tetris. 🎮',
  publicRepo: true,
  updated_at: '2020-04-27',
  created_at: '2016-12-20',
  language: 'JavaScript',
  owner: {
    login: 'chvin',
    avatar_url: 'https://avatars2.githubusercontent.com/u/5383506?v=4',
    html_url: 'https://github.com/chvin',
  },
  html_url: 'https://github.com/chvin/react-tetris',
};

describe('The github user & repo API', () => {
  test('Get repos with working request', async () => {
    const resp = await request(app).get('/api/repos/tetris');
    expect(resp.status).toBe(200);
    assert(resp.body[0], mockRepo);
  });
  test('Confirm array is returned', async () => {
    const resp = await request(app).get('/api/repos/tetris');
    expect(resp.status).toBe(200);
    assert(Array.isArray(resp.body), true);
  });
  test('Get repos failing request', async () => {
    const resp = await request(app).get('/api/repos/tetris112244');
    expect(resp.status).toBe(404);
    assert.equal(resp.body.message, 'No Repos Found!');
  });
  test('get one user', async () => {
    const resp = await request(app).get('/api/users/lwears');
    expect(resp.status).toBe(200);
    assert.deepEqual(resp.body, mockUser);
  });
  test('get one user', async () => {
    const resp = await request(app).get('/api/users/lwears');
    expect(resp.status).toBe(200);
    assert.equal(typeof resp.body, 'object');
  });
  test('fail on unknown user', async () => {
    const resp = await request(app).get('/api/users/lwears12345');
    expect(resp.status).toBe(404);
    assert.equal(resp.body.message, 'No User Found!');
  });
});
