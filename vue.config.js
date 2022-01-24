module.exports = {
  lintOnSave: true,
  crossorigin: 'anonymous',
  integrity: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Vue Element Superhero',
    },
  },
  devServer: {
    disableHostCheck: true,
    useLocalIp: false,
    proxy: {
      '': {
        target: 'https://superheroapi.com',
        changeOrigin: true,
      },
    },
  },
};
