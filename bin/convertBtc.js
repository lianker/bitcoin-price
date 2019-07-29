"use strict";

var request = require('request-promise-native');

var chalk = require('chalk');

var ora = require('ora');

var spinner = ora({
  text: 'retrieving data',
  color: 'green'
});

function convertBtc() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var url = "https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=".concat(currency, "&amount=").concat(amount);
  spinner.start();
  return request(url).then(function (body) {
    spinner.stop();
    return body;
  }).then(function (body) {
    var apiResponse = JSON.parse(body);
    console.info(chalk.red(amount) + ' BTC to ' + chalk.cyan(currency) + ' = ' + chalk.yellow(apiResponse.price));
  })["catch"](function (err) {
    spinner.stop();
    console.info(chalk.red('Something went wrong in the API. Try in a few minutes.'));
    return err;
  }); // request(url, (_error, response, body) => {
  //   let apiResponse
  //   spinner.stop()
  //   try {
  //     apiResponse = JSON.parse(body)
  //   } catch (parseError) {
  //     console.log(chalk.red('Something went wrong in the API. Try in a few minutes.'))
  //     return parseError
  //   }
  //   console.log(chalk.red(amount) + ' BTC to ' + chalk.cyan(currency) + ' = ' + chalk.yellow(apiResponse.price))
  // })
}

module.exports = convertBtc;