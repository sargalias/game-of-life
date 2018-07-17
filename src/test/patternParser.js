const path = require('path');
const fs = require('fs');

const patternParser = (inDir, outDir) => {
  // get all files
  return null;
};

const parsePattern = (file) => {

};

const getAllFilenames = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
};


module.exports = { patternParser, parsePattern, getAllFilenames };