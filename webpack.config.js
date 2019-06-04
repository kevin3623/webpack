const webpack = require('webpack'); // 引入webpack

var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
  // source-map
  devtool: 'source-map',
  // 文件人口、存放
  entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  // 本地服务器
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true, //实时刷新
    host:'localhost',
    port:9900
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配.js文件
        //排除也就是不转换node_modules下面的.js文件
        exclude: /(node_modules|bower_components)/,
        use:[{
          //加载器 
          loader: "babel-loader"
        }]
      },
      { // 这里配置这两个工具
        test: /\.css$/,
        use: [ // 请注意这里对同一个文件引入多个loader的方法。
            {
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }
        ]
      }
    ]
  },
   // 配置插件
   plugins: [
    new htmlWebpackPlugin({
      filename:'index.html', //通过模板生成的文件名
      template:'index.html',//模板路径
      inject:true, //是否自动在模板文件添加 自动生成的js文件链接
      title:'这个是WebPack Demo',
      minify:{
          removeComments:true, //是否压缩时 去除注释
          // collapseWhitespace: true,
          // removeAttributeQuotes: true
      }
    })
  ]
}