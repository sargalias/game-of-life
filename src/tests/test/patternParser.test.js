const path = require('path');
const fs = require('fs');
const { patternParser, parsePattern, getAllFilenames } = require('../../test/patternParser');

const inDir = path.join(__dirname, 'patterns_src');
const outDir = path.join(__dirname, 'patterns_out');

test('getAllFilenames works correctly', () => {
  expect.assertions(1);
  const expected = ['34p13_105.lif', 'single_cell_105.lif'];
  return getAllFilenames(inDir)
    .then(files => {
      expect(files).toEqual(expected);
    });
});


test('parsePattern works correctly', () => {

});
