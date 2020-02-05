var sinon = require('sinon');
var CheckOut = require('../src/CheckOut');
var Money = require('../lib/DontTouch/util/Money');
var PAGAClient = require('../lib/DontTouch/paga/PAGAClientImpl');

describe('CheckOut test suite', function () {
  var mockPAGAClient;
  var mock;

  beforeEach(function () {
    mockPAGAClient = new PAGAClient();
    mock = sinon.mock(mockPAGAClient);
  });

  test('total is zero initially', function () {
    const purchase = new Purchase();
    expect(purchase.total()).toEqual(new Money(0))
    expectation.verify();
  });
});