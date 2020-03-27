const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
module.exports = withCSS(
  withLess(
    withSass({
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        })
        return config
      },
      publicRuntimeConfig: {
        AUTH_SERVICE:
          process.env.AUTH_SERVICE ||
          'http://localhost:3000/api/auth',
        LENDING_SERVICE:
          process.env.LENDING_SERVICE ||
          'http://localhost:3000/api/lending',
        SCB_API: 'l7b5616b7185e143c9a380033362b5f324',
        BLOCKCHAIN_HOST:
          process.env.BLOCKCHAIN_HOST ||
          'https://ropsten.infura.io/v3/60b00290d6e841db9c79393ddcb2f00d',
        ACCOUNT_WALLET:
          process.env.ACCOUNT_WALLET ||
          '0x6431F4CA5A8BBEFCA56F89A52748A8616E7DD145FF74E281E7567ED702A84F26',
        SCB_SECRET: 'e48a5b88876f48708e4ac495fb4705d9',
      },
    }),
  ),
)
