const fs = require('fs');

// Creer le fichier
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created!');

// Lire le fichier
fs.readFile('welcome.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

