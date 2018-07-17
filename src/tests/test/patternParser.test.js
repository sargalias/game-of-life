const path = require('path');
const fs = require('fs');
const {
  patternParser,
  parsePattern,
  getAllFilenames,
  readFile
} = require('../../test/patternParser');

const inDir = path.join(__dirname, 'patterns_src');
const outDir = path.join(__dirname, 'patterns_out');

test('getAllFilenames works correctly', () => {
  expect.assertions(1);
  const expected = ['34p13_105.lif', 'simple_105.lif', 'single_cell_105.lif'];
  return getAllFilenames(inDir)
    .then(files => {
      expect(files).toEqual(expected);
    });
});

test('readFile works correctly', () => {
  const filepath = path.join(inDir, 'single_cell_105.lif');
  return readFile(filepath).then((data) => {
    expect(data).toMatchSnapshot();
  });
});

test('parsePattern works correctly with single cell pattern', () => {
  const data = `#Life 1.05
#D Name: single_cell
#D The smallest known period 13 oscillator.
#D www.conwaylife.com/wiki/index.php?title=34P13
#N
#P -8 -8
*`;
  expect(parsePattern(data)).toEqual({'single_cell': [[1]]});
});

test('parsePattern works correctly with simple cell pattern', () => {
  const data = `#Life 1.05
#D Name: simple
#D The smallest known period 13 oscillator.
#D www.conwaylife.com/wiki/index.php?title=34P13
#N
#P -8 -8
*.
.*
`;
  expect(parsePattern(data)).toEqual({'simple': [[1,0], [0, 1]]});
});

test('parsePattern works correctly with normal cell pattern', () => {
  const data = `#Life 1.05
#D Name: 34P13
#D The smallest known period 13 oscillator.
#D www.conwaylife.com/wiki/index.php?title=34P13
#N
#P -8 -8
....***
.
......*
......**
.....*
........*
....*...*
.........**
**..***.....*
**.....*....**.*
.......*...*...*
.......*.*.....*
.
.
......**
......**
`;
  const expected = {
    '34P13': [
      [0,0,0,0,1,1,1],
      [0],
      [0,0,0,0,0,0,1],
      [0,0,0,0,0,0,1,1],
      [0,0,0,0,0,1],
      [0,0,0,0,0,0,0,0,1],
      [0,0,0,0,1,0,0,0,1],
      [0,0,0,0,0,0,0,0,0,1,1],
      [1,1,0,0,1,1,1,0,0,0,0,0,1],
      [1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1],
      [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
      [0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1],
      [0],
      [0],
      [0,0,0,0,0,0,1,1],
      [0,0,0,0,0,0,1,1]
    ]
  };
  expect(parsePattern(data)).toEqual(expected);
});

