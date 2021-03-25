#!/usr/bin/env node

/* eslint-disable no-console, consistent-return */

const path = require('path');
const fs = require('fs');

const { files, index } = require('./utils');

const dir = 'myapp';

console.log('Init project...');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

Object.keys(files).forEach((file) => {
  fs.writeFile(`./${dir}/${file}`, files[file], (err) => {
    if (err) throw err;
    console.log(`File ${file} created!`);
  });
});

fs.copyFile(path.resolve(__dirname, '../../../package.json'), `./${dir}/package.json`, (err) => {
  if (err) throw err;
  console.log('File package.json copied!');
});

fs.mkdir(`./${dir}/src/pages`, { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Dir src/pages created!!');

  fs.writeFile(`./${dir}/src/pages/index.jsx`, index, (e) => {
    if (err) throw e;
    console.log('File src/pages/index.jsx created!');
  });
});
