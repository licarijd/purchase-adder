var PAGAClient = require('./PAGAClient');
var Rand = require('../util/Rand');
var SimulateAwkwardness = require('../support/SimulateAwkwardness');

function PAGAClientImpl() {
  // If you got here, naughty you!
  // This class doesn't of course do any billing, it merely gives you a feel
  // for the awkwardness: You wait a lot, and the results aren't always predictable!
  this.startTransaction = function (merchantId) {
    SimulateAwkwardness.delay(Rand.randomNumber(7000, 10000));
    return true;
  };

  this.stopTransaction = function () {
    SimulateAwkwardness.delay(Rand.randomNumber(3000, 4000));
  };

  this.hasCreditFor = function (amount) {
    SimulateAwkwardness.delay(Rand.randomNumber(3000, 6000));
    var randomNumber = Rand.randomNumber(-2000, 2000);
    return randomNumber > 0;
  };

  this.charge = function (amount) {
    SimulateAwkwardness.delay(Rand.randomNumber(2000, 6000));
    return this.randomConfirmationNumber();
  };

  this.setCreditCardInfo = function (cardNumber, expiration) {
    SimulateAwkwardness.delay(Rand.randomNumber(1000, 6000));
  };

  PAGAClient.call(this);

  this.randomConfirmationNumber = function () {
    var result = '';
    for (var i = 0; i < 5; i++) {
      result += Rand.randomNumber(0, 9);
    }
    result += ('A' + Rand.randomNumber(0, 25));
    return result;
  };
}

module.exports = PAGAClientImpl;
