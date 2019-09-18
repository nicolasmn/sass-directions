const fs = require('fs');
const path = require('path');
const mocha = require('mocha');
const sassTrue = require('sass-true');

const testFolder = path.resolve(__dirname, '.');

fs.readdirSync(testFolder).forEach(filename => {
  if (path.extname(filename) !== '.scss') return;

  const file = path.join(testFolder, filename);
  sassTrue.runSass({ file }, mocha.describe, mocha.it);
});
