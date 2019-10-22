var repeatedNumber = require('./findRepeatedNumber.js');
var expect = require('chai').expect;

describe('should find repeated number', function() {
  it('should be 5', function() {
    expect(repeatedNumber([5, 5, 1, 6, 7])).to.be.equal(5);
  });
});
