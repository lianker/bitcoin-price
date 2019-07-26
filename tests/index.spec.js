import { expect } from 'chai'
import hello from '../src/index'

describe('minimo tests', () => {
  it('method hello should be ok', () => {
    expect(hello()).to.be.equal('minimo is ready!')
  })
})
