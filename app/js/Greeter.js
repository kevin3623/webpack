// Greeter.js
var config = require('./config.json');

console.log('测试')

let greet = document.createElement('div');
greet.textContent = config.greetText;

document.querySelector("#root").appendChild(greet);