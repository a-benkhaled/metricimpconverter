const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  this.timeout(5000);
  test('Valid 10L conversion', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=10L')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.approximately(2.64, res.body.returnNum, 0.1);
        done();
      });
  });

  test('Invalid 32g conversion', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=32g')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal('invalid unit', res.text);
        done();
      });
  });
  
  test('Invalid 3/7.2/4kg conversion', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=3/7.2/4kg')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal('invalid unit', res.text);
        done();
      });
  });
 
  test('Invalid 3/7.2/4kilomegagram conversion', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal('invalid unit', res.text);
        done();
      });
  });
  
  test('valid conversion for no number', function(done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=L')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.approximately(0.264, res.body.returnNum, 0.1);
        done();
      });
  });
  
});

