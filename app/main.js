//main.js 
import './main.css';//使用require导入css文件
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());