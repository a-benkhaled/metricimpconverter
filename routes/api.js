'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {
  let ch = new ConvertHandler();
  app.get('/api/convert', (req, res) => {
    console.log(req.query.input);
    const input = req.query.input;
    let num = ch.getNum(input);
    let unit = ch.getUnit(input);

    if (num == null || unit == null) {
      return res.send('invalid unit');
    }

    let r_num = ch.convert(num, unit);
    let r_unit = ch.getReturnUnit(unit);
    return res.send({
      'initNum': num,
      'initUnit': unit,
      'returnNum': r_num,
      'returnUnit': r_unit,
      'string': ch.getString(num, unit, r_num, r_unit)
    });

  });

};
