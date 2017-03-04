import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const data = [
  {
    people: ['Jordan Walke', 'Dan Abramov'],
    organisation: 'Facebook',
    knownFor: 'React Redux',
    img_url: 'https://www.filepicker.io/api/file/xwCZZhShQLS247e9uC4D',
    link: 'https://facebook.github.io/react/',
  },
  {
    people: ['Quincy Larson'],
    organisation: 'FreeCodeCamp',
    knownFor: 'Learning',
    img_url: 'https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png',
    link: 'https://www.freecodecamp.com',
  },
  {
    people: ['Paul Irish'],
    organisation: 'Google',
    knownFor: 'Chrome DevTools',
    img_url: 'https://pbs.twimg.com/profile_images/809064074998710272/KJvmreRz.jpg',
    link: 'https://developer.chrome.com/devtools',
  },
  {
    people: ['TJ Hollowaychuk'],
    organisation: 'Google',
    knownFor: 'Express.js',
    img_url: 'https://pbs.twimg.com/profile_images/378800000226613002/36623ae09f553713c575c97c77544b49.jpeg',
    link: 'https://github.com/tj',
  },
];

ReactDOM.render(
  <App giants={data} />,
  document.getElementById('root')
);
