const path = require('path');
const fs = require('fs');

const patternParser = (inDir, outDir) => {
  // get all files
  getAllFilenames(inDir)
    .then(filename => {

    });
  return null;
};

const parseFile = (filepath) => {
  return readFile(filepath)
    .then(parsePattern);
};

const readFile = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const getAllFilenames = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
};

const parsePattern = (data) => {
  const board = [];
  let name = 'bob';
  const lines = data.trim().split('\n');
  for (let line of lines) {
    line = line.trim();
    let [newName, lineArr] = parseLine(line);
    name = newName || name;
    if (lineArr.length !== 0)
      board.push(lineArr);
  }
  return {[name]: board};
};

const parseLine = (line) => {
  line = line.trim();
  let name = null;
  let lineArr = [];
  if (line.startsWith('#')) {
    name = matchName(line);
  }
  else {
    lineArr = parseBoardFromLine(line);
  }
  return [name, lineArr];
};

const matchName = (line) => {
  let name = null;
  let match = line.match(/Name:\s+(.*)/);
  if (match) {
    name = match[1];
  }
  return name;
};

const parseBoardFromLine = (line) => {
  const lineArr = [];
  for (let symbol of line) {
    if (symbol === '.') {
      lineArr.push(0);
    } else {
      lineArr.push(1);
    }
  }
  return lineArr;
};


module.exports = { patternParser, parsePattern, getAllFilenames, readFile, parsePattern };