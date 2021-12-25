const path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: [".js", ".jsx", ".css", ".tsx", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: [/node_modules/, /src\/theme/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"]
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/node_modules/, /src\/theme/],
      }
    ]
  }
};
