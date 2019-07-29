const expect = require('chai').expect
const pkg = require('../package.json')

const exec = require('child_process').exec
const btcConverter = './src/main.js'

describe('Main CLI', () => {
  it('Should  return 1.0.0 when bitcoin-price --version', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version)
      done()
    })
  })

  it('Should  return description when bitcoin-price --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.includes('a simple CLI to convert bitcoin values to any currency')).to.be.true
      done()
    })
  })

  it('Should  return currency option when bitcoin-price --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.includes('--currency')).to.be.true
      done()
    })
  })

  it('Should  return amount option when bitcoin-price --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.includes('--amount')).to.be.true
      done()
    })
  })
})
