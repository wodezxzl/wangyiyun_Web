// 此文件用来帮助webstorm识别别名,并且给出提示和跳转
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    // 可以省略的文件后缀
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src')
    }
  }
}
