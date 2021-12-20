const fs = require('fs');
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const CopyPlugin = require("copy-webpack-plugin");

/* 获取page目录下的组件 */
function outputConfig() {
  const result = {};
  fs.readdirSync("./src/components")
    .forEach(file => {
      result[file] = `./src/components/${file}`
    });
  return result;
}

const clientConfig = {
  devtool: "eval", // source-map源码地图
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  entry: outputConfig(),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist/assets"),
    library: '[name]',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {//缓存组
        common: {//缓存公用模块
          name: 'global-components',
          chunks: 'initial',//从入口文件抽离
          minSize: 0,//只要大于0字节就抽离
          minChunks: 2,//只要使用2次以上就抽离
        },
        // vendor: {
        //   name: 'disanfang',
        //   priority: 1,//优先级提高，先执行vendor，再执行其他
        //   test: /node_modules/,//把node_modules文件夹下的公用引用抽离出来
        //   chunks: 'initial',//从入口文件抽离
        //   minSize: 0,//只要大于0字节就抽离
        //   minChunks: 2,//只要使用2次以上就抽离
        // }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: { injectType: 'styleTag' } },
          'css-loader?modules',
        ],
      },
      {
        test: /\.(png)|(jpe?g)|(gif)$/,
        use: [
          {
            loader: 'url-loader'
          },
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, '/src/utils'),
        to: path.join(__dirname, '/dist/assets'),
        ignore: ['.js']
      }
    ])
  ],
};

module.exports = merge(baseConfig, clientConfig);
