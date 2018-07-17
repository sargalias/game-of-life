const path = require('path');
const fs = require('fs');
const {
  patternParser,
  _parsePattern,
  _getAllFilenames,
  _readFile,
  _parseFile,
  _buildData,
  _writeData
} = require('../../../scripts/patterns/patternParser');
import { fileData, parsedData, filenames, allData, finalFile } from "./fixtures/patterns";

const inDir = path.join(__dirname, 'patterns_src');
const outPath = path.join(__dirname, 'patterns_out', 'patterns.js');
const outPath2 = path.join(__dirname, 'patterns_out', 'patterns2.js');


const removeWhitespace = (str) => {
  return str.replace(/\s/g, '');
};


test('_getAllFilenames works correctly', () => {
  expect.assertions(1);
  const expected = ['34p13_105.lif', 'simple_105.lif', 'single_cell_105.lif'];
  return _getAllFilenames(inDir)
    .then(files => {
      expect(files).toEqual(expected);
    });
});

test('_readFile works correctly', () => {
  const filepath = path.join(inDir, 'single_cell_105.lif');
  return _readFile(filepath).then((data) => {
    expect(removeWhitespace(data)).toBe(removeWhitespace(fileData[0]));
  });
});

test('_parsePattern works correctly with single cell pattern', () => {
  const data = fileData[0];
  expect(_parsePattern(data)).toEqual(parsedData[0]);
});

test('_parsePattern works correctly with simple cell pattern', () => {
  const data = fileData[1];
  expect(_parsePattern(data)).toEqual(parsedData[1]);
});

test('_parsePattern works correctly with normal cell pattern', () => {
  const data = fileData[2];
  expect(_parsePattern(data)).toEqual(parsedData[2]);
});

test('_parseFile should work correctly', () => {
  expect.assertions(1);
  const filename = path.join(inDir, 'simple_105.lif');
  return _parseFile(filename).then((data) => {
    expect(data).toEqual(parsedData[1]);
  });
});

test('_buildData should work correctly', () => {
  expect.assertions(1);
  return _buildData(inDir, filenames).then(allData => {
    expect(allData).toEqual({
      ...parsedData[0],
      ...parsedData[1],
      ...parsedData[2]
    });
  });
});

test('_writeData should work correctly', () => {
  expect.assertions(1);
  return _writeData(outPath, allData)
    .then(() => {
      return new Promise((resolve, reject) => {
        fs.readFile(outPath, 'utf8', (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      });
    }).then((data) => {
      expect(removeWhitespace(data)).toBe(removeWhitespace(finalFile));
    });
});

test('patternParser should work correctly', () => {
  return patternParser(inDir, outPath2).then(() => {
    return new Promise((resolve, reject) => {
      fs.readFile(outPath, 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }).then((data) => {
    expect(removeWhitespace(data)).toBe(removeWhitespace(finalFile));
  });
});
