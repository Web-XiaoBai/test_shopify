const { src, dest, series, parallel } = require('gulp')
const del = require('del');

/* 拷贝theme主题文件夹 */
const startTask = () => {
  return src('src/theme/*/*')
    .pipe(dest('dist'));
};

/* 清除dist文件夹 */
const clean = () => {
  return del(['dist']);
};

exports.default = series(clean, parallel(startTask));