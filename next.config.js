const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    // files in the following locations are accessable from each scss file
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "node_modules")
    ],
  }
};
