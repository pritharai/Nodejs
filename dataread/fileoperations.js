const fs = require('fs');

console.log('starting to read');
// block the code
const buffer = fs.readFileSync('data.txt', { encoding: 'utf8'})
console.log(buffer);
console.log('this is another operation being performed')