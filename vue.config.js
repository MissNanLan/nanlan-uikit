module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
        //这里配置了components文件的路径别名
          '@': 'src'
        }
      }
    }
  }
  
  