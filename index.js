const fs = require('fs');

function createFolderIfNotThere(folderName) {
  const fullPath = __dirname + '/' + folderName;
  function errorHandler(err) {
    if (err && err.code !== 'EEXIST') console.log('error: ', err);
  }
  fs.mkdir(fullPath, { recursive: false }, errorHandler);
}

module.exports = createFolderIfNotThere
