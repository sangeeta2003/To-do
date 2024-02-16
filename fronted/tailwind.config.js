// tailwind.config.js
const path = require('path');

module.exports = {
  content: [
    path.resolve( './index.html'),
    path.resolve( './src/**/*.{vue,js,ts,jsx,tsx}'),
  ],
  // other Tailwind CSS configurations...
};
  