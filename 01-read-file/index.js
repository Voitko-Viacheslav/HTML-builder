const fs = require('fs');
const path = require('path');
const pathToFile = path.resolve(__dirname, 'text.txt');
const readableStream = fs.createReadStream(pathToFile, 'utf-8');

readableStream.on('data', (chunk) => {
  console.log(chunk);
});

readableStream.on('error', (err) => {
  console.error(`Error: ${err.message}`);
});

readableStream.on('end', () => readableStream.close());
