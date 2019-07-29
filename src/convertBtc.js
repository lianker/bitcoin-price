const request = require('request-promise-native')
const chalk = require('chalk')
const ora = require('ora')

const spinner = ora({
  text: 'retrieving data',
  color: 'green'
})

function convertBtc(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`

  spinner.start()

  return request(url)
    .then(body => {
      spinner.stop()
      return body
    })
    .then(body => {
      const apiResponse = JSON.parse(body)
      console.info(chalk.red(amount) + ' BTC to ' + chalk.cyan(currency) + ' = ' + chalk.yellow(apiResponse.price))
    })
    .catch(err => {
      spinner.stop()
      console.info(chalk.red('Something went wrong in the API. Try in a few minutes.'))
      return err
    })
}

module.exports = convertBtc
