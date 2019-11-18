var mergeSort = require('./mergeSort.js');
var expect = require('chai').expect;

describe('Should sort an array', function() {
  it('should sort & be true', function() {
    expect(mergeSort([5, 5, 1, 6, 7]).equals([1,5,5,6,7])).to.be.equal(true);
  });
  it('should sort & be false', function() {
    expect(mergeSort([5, 5, 1, 6, 7]).equals([1,5,5,7])).to.be.equal(false);
  });
});

if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
Array.prototype.equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;
    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }
    return true;
}
Object.defineProperty(Array.prototype, "equals", {enumerable: false});