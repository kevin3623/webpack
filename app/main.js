//main.js 
import './css/main.css';//使用require导入css文件
const greeter = require('./js/Greeter.js');
document.querySelector("#root").appendChild(greeter());