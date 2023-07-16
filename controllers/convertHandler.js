function ConvertHandler() {

  this.getNum = function(input) {
    const regex = /^(?<num>\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)?(gal|lbs|l|kg|mi|km)$/i;
    const found = input.match(regex);
    if (found)
      if (found.groups['num'])
        return found.groups['num']
      else
        return 1;
    return null;
  };

  this.getUnit = function(input) {
    const regex = /^(\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)?(?<unit>gal|lbs|l|kg|mi|km)$/i;
    const found = input.match(regex);
    if (found)
      return found.groups['unit']

return null;
  };

  this.getReturnUnit = function(initUnit) {
    const r_unit = {
      'mi': 'km',
      'km': 'mi',
      'gal': 'l',
      'l': 'gal',
      'lbs': 'kg',
      'kg': 'lbs',
    }
    return r_unit[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    const unit_name = {
      'mi': 'miles',
      'km': 'kilometers',
      'gal': 'gallons',
      'l': 'liters',
      'lbs': 'pounds',
      'kg': 'kilograms',
    }
    return unit_name[unit.toLowerCase()];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const lToGal = 0.264172;
    const kgToLbs = 2.20462;
    const kmToMi = 0.621371;
    
    initUnit = initUnit.toLowerCase();
    if (initUnit == 'gal') {
      return initNum * galToL;

    } else if (initUnit == 'lbs') {
      return initNum * lbsToKg;

    } else if (initUnit == 'mi') {
      return initNum * miToKm;

    } else if (initUnit == 'l') {
      return initNum * lToGal;

    } else if (initUnit == 'kg') {
      return initNum * kgToLbs;

    } else if (initUnit == 'km') {
      return initNum * kmToMi;
    }

    return null;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(this.getReturnUnit(initUnit))}`;
  };

}

module.exports = ConvertHandler;
