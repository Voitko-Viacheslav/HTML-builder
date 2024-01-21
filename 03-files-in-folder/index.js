const fs = require('fs');
const path = require('path');
const secretFolderPath = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolderPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(`Error: ${err.message}`);
  } else {
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.join(secretFolderPath, file.name);
        const fileExt = path.extname(filePath).slice(1);
        const fileName = file.name.replace(`.${fileExt}`, '');

        fs.stat(filePath, (statErr, stats) => {
          if (statErr) {
            console.error(`Error: ${statErr}`);
          } else {
            console.log(`${fileName} - ${fileExt} - ${stats.size}kb`);
          }
        });
      }
    });
  }
});
