const fs = require('fs');

console.log('starting to read');
const buffer = fs.readFileSync('data.txt')
console.log(buffer.toString());
console.log('this is another operation being performed')