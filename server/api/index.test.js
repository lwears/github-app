const axios = require('axios');
const githubAPI = require('./index');

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

describe('The github helper functions', () => {
  test('reformat user object', async () => {
    const initialResult = await axios.get('https://api.github.com/users/lwears');
    const result = githubAPI.formatUser(initialResult.data);
    expect(result).toMatchObject(mockUser);
  });
  test('reformat repo object & nested owner', async () => {
    const initialResult = await axios.get('https://api.github.com/search/repositories?q=tetris');
    const result = githubAPI.formatRepo(initialResult.data.items[0]);
    expect(result).toMatchObject(mockRepo);
  });
});
