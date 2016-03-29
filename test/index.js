var expect = require('expect.js')

var jvIsArgs = require('../')

describe('Expect', function() {
  it('A', function() {
    var a = {}, b = arguments, c = undefined, d = [1, 2, 3]
    expect(jvIsArgs(a)).to.be(false) 
    expect(jvIsArgs(b)).to.be(true) 
    expect(jvIsArgs(c)).to.be(false) 
    expect(jvIsArgs(c)).to.not.be(true) 
  })
})
