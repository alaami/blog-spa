const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    configureWebpack: {
      plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/oidc-client/dist/oidc-client.min.js', to: 'js'},
          {from :'node_modules/cookie-storage-v2/dist/cookie-storage.min.js',to:'js' },
          {from :'node_modules/cookie-storage-v2/dist/cookie-storage.js',to:'js' }
          
        ])
      ],
      devServer: {
        proxy: 'https://dev-portfolioid.auth0.com/',
    }
    }

  }
