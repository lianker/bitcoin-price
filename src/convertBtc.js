const request = require('request')
const chalk = require('chalk')
const ora = require('ora')

const spinner = ora({
  text: 'retrieving data',
  color: 'green'
})

function convertBtc(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`

  spinner.start()
  request(url, (_error, response, body) => {
    let apiResponse

    spinner.stop()

    try {
      apiResponse = JSON.parse(body)
    } catch (parseError) {
      console.log(chalk.red('Something went wrong in the API. Try in a few minutes.'))
      return parseError
    }
    console.log(chalk.red(amount) + ' BTC to ' + chalk.cyan(currency) + ' = ' + chalk.yellow(apiResponse.price))
  })
}

module.exports = convertBtc
