#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const convertBtc = require('./convertBtc')

program
  .version(pkg.version)
  .description('a simple CLI to convert bitcoin values to any currency')
  .option('-C, --currency <currency>', 'currency to be converted, (default: USD)')
  .option('-A, --amount <amount>', 'value in bitcoin to be converted, (default: 1)')
  .parse(process.argv)

convertBtc(program.currency, program.amount)
