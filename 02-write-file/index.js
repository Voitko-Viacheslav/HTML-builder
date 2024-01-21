const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const newFile = path.join(__dirname, 'out.txt');
const writeData = fs.createWriteStream(newFile);

stdout.write('What is you favourite names?\n');

stdin.on('data', (data) => {
  const name = data.toString().toLowerCase().trim();

  if (name === 'exit') {
    console.log('Thank you, good bye!');
    process.exit();
  } else {
    if (name.length > 0) {
      writeData.write(data);
    }
  }
});

process.on('SIGINT', () => {
  console.log('Thank you, good bye!');
  process.exit();
});
