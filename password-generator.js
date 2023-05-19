var generator = require('generate-password');
var pass = generator.generate({ numbers: true });
console.log(pass); 