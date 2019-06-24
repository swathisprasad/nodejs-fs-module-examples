const fs = require("fs");

fs.writeFile('file.txt', "Hello world", function(err) {
    if (err) return callback(err);

    // If succeeded, print the message.
    console.log("file created successfully!")
});

try {
  const file = fs.writeFileSync('test.txt', "Hello world");
} catch (err) {
  console.error(err)
}

fs.readFile('file.txt', "utf8", function(err, data) {
    if (err) return callback(err);

    // If succeeded, print the contents.
    console.log(data);
});

const data = fs.readFileSync('test.txt', "utf8");
console.log(data);


fs.stat('test.txt', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(stats.isFile());
    console.log(stats.isSymbolicLink());
    console.log(stats.isDirectory());
    console.log(stats.size);
  });

  const status = fs.statSync('test.txt');

  console.log(status.isFile());
  console.log(status.isSymbolicLink());
  console.log(status.isDirectory());
  console.log(status.size);


  fs.open('file.txt', 'r', (err, fdesc) => {
    console.log("descriptor " + fdesc.toLocaleString());
  });


  try {
    const fd = fs.openSync('test.txt', 'r')
  } catch (err) {
    console.error(err)
  }

const folderName = '/Users/swathi/Documents/GitHub/nodejs-app/folder1'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}


fs.unlink('test.txt', (err) => {
  if (err) throw err;
  console.log('test.txt was removed');
});

fs.unlinkSync('text.txt');

fs.rename('file.txt', 'hello.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});
