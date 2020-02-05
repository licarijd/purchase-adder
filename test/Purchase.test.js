var sinon = require('sinon');
var Money = require('../lib/DontTouch/util/Money');
var PAGAClient = require('../lib/DontTouch/paga/PAGAClientImpl');
var Purchase = require('../src/Purchase');

describe('CheckOut test suite', function () {
  var mockPAGAClient;
  var mock;

  beforeEach(function () {
    mockPAGAClient = new PAGAClient();
    mock = sinon.mock(mockPAGAClient);
  });

  test('total is zero initially', function () {
    const purchase = new Purchase();
    expect(purchase.total().equals(new Money(0))).toEqual(true)
  });
});