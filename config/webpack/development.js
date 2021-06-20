process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require('path')
const { devServer } = require('@rails/webpacker')

const webpackConfig = require('./webpackConfig')

const developmentEnvOnly = (clientWebpackConfig, serverWebpackConfig) => {

  const isWebpackDevServer = process.env.WEBPACK_DEV_SERVER

  //plugins
  if (isWebpackDevServer) {
    // Note, when this is run, we're building the server and client bundles in separate processes.
    // Thus, this plugin is not applied.
    const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
    clientWebpackConfig.plugins.push(
      new ReactRefreshWebpackPlugin({
        overlay: {
          sockPort: devServer.port
        }
      })
    )
  }
}

module.exports = webpackConfig(developmentEnvOnly)