// Greeter.js
var config = require('./config.json');

console.log('dd')
module.exports = function() {
    let greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
  };