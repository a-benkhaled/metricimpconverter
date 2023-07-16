const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Input Unit Tests', function() {
  suite('Number Reading', function() {
    test('Integer', function() {
      assert.equal('10', convertHandler.getNum('10km'));
    });
    test('Decimal', function() {
      assert.equal('10.21', convertHandler.getNum('10.21km'));
    });
    test('Fraction', function() {
      assert.equal('10/21', convertHandler.getNum('10/21km'));
    });
    test('Decimal Fraction', function() {
      assert.equal('10.3/21.23', convertHandler.getNum('10.3/21.23km'));
    });
    test('Incorrect Fraction', function() {
      assert.isNull(convertHandler.getNum('3/2/3gal'));
    });
    test('Default 1', function() {
      assert.equal(1, convertHandler.getNum('mi'));
    });

  });

  suite('Units Reading', function() {
    test('Km', function() {
      assert.equal('km', convertHandler.getUnit('10km'));
    });
    test('Miles', function() {
      assert.equal('mi', convertHandler.getUnit('10.21mi'));
    });
    test('Gal', function() {
      assert.equal('gal', convertHandler.getUnit('10/21gal'));
    });
    test('Liter', function() {
      assert.equal('l', convertHandler.getUnit('10.3/21.23l'));
    });
    test('Pound', function() {
      assert.equal('lbs', convertHandler.getUnit('3lbs'));
    });
    test('Kg', function() {
      assert.equal('kg', convertHandler.getUnit('kg'));
    });
    test('Invalid Unit', function() {
      assert.isNull(convertHandler.getUnit('sss'));
    });
  });

  suite('Return Units Reading', function() {
    test('Km', function() {
      assert.equal('km', convertHandler.getUnit('10km'));
    });
    test('Miles', function() {
      assert.equal('mi', convertHandler.getUnit('10.21mi'));
    });
    test('Gal', function() {
      assert.equal('gal', convertHandler.getUnit('10/21gal'));
    });
    test('Liter', function() {
      assert.equal('l', convertHandler.getUnit('10.3/21.23l'));
    });
    test('Pound', function() {
      assert.equal('lbs', convertHandler.getUnit('3lbs'));
    });
    test('Kg', function() {
      assert.equal('kg', convertHandler.getUnit('kg'));
    });
    test('Invalid Unit', function() {
      assert.isNull(convertHandler.getUnit('sss'));
    });
  });

  suite('Return Units Reading', function() {
    test('Km', function() {
      assert.equal('km', convertHandler.getUnit('10km'));
    });
    test('Miles', function() {
      assert.equal('mi', convertHandler.getUnit('10.21mi'));
    });
    test('Gal', function() {
      assert.equal('gal', convertHandler.getUnit('10/21gal'));
    });
    test('Liter', function() {
      assert.equal('l', convertHandler.getUnit('10.3/21.23l'));
    });
    test('Pound', function() {
      assert.equal('lbs', convertHandler.getUnit('3lbs'));
    });
    test('Kg', function() {
      assert.equal('kg', convertHandler.getUnit('kg'));
    });
    test('Invalid Unit', function() {
      assert.isNull(convertHandler.getUnit('sss'));
    });
  });

  suite('Spelled-out Units String', function() {
    test('Miles', function() {
      assert.equal('miles', convertHandler.spellOutUnit('mi'));
    });
    test('Km', function() {
      assert.equal('kilometers', convertHandler.spellOutUnit('km'));
    });
    test('Gal', function() {
      assert.equal('gallons', convertHandler.spellOutUnit('gal'));
    });
    test('Liter', function() {
      assert.equal('liters', convertHandler.spellOutUnit('l'));
    });
    test('Pound', function() {
      assert.equal('pounds', convertHandler.spellOutUnit('lbs'));
    });
    test('Kg', function() {
      assert.equal('kilograms', convertHandler.spellOutUnit('kg'));
    });
  });

  suite('Correct conversions', function() {
    test('Miles to Km', function() {
      assert.equal(1.60934 * 2, convertHandler.convert(2, 'mi'));
    });
    test('Km to Mi', function() {
      assert.equal(0.621371 * 3, convertHandler.convert(3, 'km'));
    });
    test('Gal to L', function() {
      assert.equal(3.78541 * 0.5, convertHandler.convert(0.5, 'gal'));
    });
    test('Liter to Gal', function() {
      assert.equal(0.264172 * 10, convertHandler.convert(10, 'l'));
    });
    test('Pound to Kg', function() {
      assert.equal(0.453592 * 100, convertHandler.convert(100, 'lbs'));
    });
    test('Kg to Lbs', function() {
      assert.equal(2.20462 * 1.5, convertHandler.convert(1.5, 'kg'));
    });
  });

});