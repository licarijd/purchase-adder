var sinon = require('sinon');
var Money = require('../lib/DontTouch/util/Money');
var PAGAClient = require('../lib/DontTouch/paga/PAGAClientImpl');
var Purchase = require('../src/Purchase');
var priceDirectory = require('../src/constants')

describe('CheckOut test suite', function () {
  var mockPAGAClient;
  var mock;

  beforeEach(function () {
    mockPAGAClient = new PAGAClient();
    mock = sinon.mock(mockPAGAClient);
  });

  test('total is zero initially', function () {
    const purchase = new Purchase();
    expect(purchase.total() === new Money(0).getValue()).toEqual(true)
  });

  test('adding first item results in a total equal to product price', function () {
    const purchase = new Purchase();
    const productID = "000000001234"

    purchase.add(productID)
    expect(purchase.total() === priceDirectory["000000001234"].getValue()).toEqual(true)
  });
});