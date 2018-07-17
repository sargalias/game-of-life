const path = require('path');
const fs = require('fs');

const patternParser = (inDir, outPath) => {
  // get all files
  // build the data object
  // write the thing to file.
  const allData = {};
  return _getAllFilenames(inDir)
    .then((filenames) => _buildData(inDir, filenames))
    .then((allData) => {
      return _writeData(outPath, allData);
    });
};

const _writeData = (outPath, data) => {
  data = JSON.stringify(data);
  data = `export default ${data}`;
  return new Promise((resolve, reject) => {
    fs.writeFile(outPath, data, (err) => {
      if (err) reject(err);
      resolve('The file has been saved.');
    })
  });
};

const _buildData = (inDir, filenames) => {
  const allData = {};
  const allPromises = [];
  filenames.forEach((filename) => {
    const filepath = path.join(inDir, filename);
    const newPromise = (
      _parseFile(filepath)
        .then((data) => {
          Object.assign(allData, data);
        }
    ));
    allPromises.push(newPromise);
  });
  return Promise.all(allPromises).then(() => {
    return allData;
  });
};

const _parseFile = (filepath) => {
  return _readFile(filepath)
    .then(_parsePattern);
};

const _readFile = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const _getAllFilenames = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
};

const _parsePattern = (data) => {
  const board = [];
  let name = null;
  const lines = data.trim().split('\n');
  for (let line of lines) {
    line = line.trim();
    let [newName, lineArr] = _parseLine(line);
    name = newName || name;
    if (lineArr.length !== 0)
      board.push(lineArr);
  }
  return {[name]: board};
};

const _parseLine = (line) => {
  line = line.trim();
  let name = null;
  let lineArr = [];
  if (line.startsWith('#')) {
    name = _matchName(line);
  }
  else {
    lineArr = _parseBoardFromLine(line);
  }
  return [name, lineArr];
};

const _matchName = (line) => {
  let name = null;
  let match = line.match(/Name:\s+(.*)/);
  if (match) {
    name = match[1];
  }
  return name;
};

const _parseBoardFromLine = (line) => {
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

module.exports = {
  patternParser,
  _parsePattern,
  _getAllFilenames,
  _readFile,
  _parseFile,
  _buildData,
  _writeData
};
