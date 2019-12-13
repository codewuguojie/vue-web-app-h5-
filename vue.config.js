const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const path = require('path');
const themePath = path.resolve(__dirname,'src/assets/style/theme.less');

module.exports = {

  publicPath: './',
  // 关闭eslint检查
  lintOnSave: false,
  // 配置css前缀,px转rem
  css: {
    loaderOptions: {
      less: {

        modifyVars: {
          hack: `true; @import "${themePath}";`
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },

  configureWebpack: {
    externals: {
      axios: "axios" // 配置使用CDN
    }
  }
};
