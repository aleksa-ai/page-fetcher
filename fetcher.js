const args = process.argv.slice(2);
const url = args[0];
const saveLocation = args[1];
const request = require('request');
const fs = require('fs');

request(url, (error, response, body) => {
  fs.writeFile(saveLocation, body, () => {
    if (error) {
      throw error;
    } else {
      const stats = fs.statSync(saveLocation);
      console.log(`Downloaded and saved ${stats.size} bytes to ${saveLocation}`);
    }
  });
});

//More on fs.statSync(path[, options]): https://nodejs.org/api/fs.html#fs_fs_statsync_path_options
//More on fs.writeFile(file, data[, options], callback): https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback