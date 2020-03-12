// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/styles/_*.scss')],
    });
}

module.exports = {
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },
  siteName: 'Gridsome',
  titleTemplate: '%s | Gridsome',
  icon: {
    favicon: './src/favicon.png',
    // apple-touch-iconを適用する場合は、srcディレクトリに画像ファイルを置き、下の一行のコメントを外す
    // touchicon: './src/apple-touch-icon-180x180.png',
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.GRIDSOME_CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
      },
    },
    // google analyticsを使用する場合コメントアウトする
    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
  ],
}
