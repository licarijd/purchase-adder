var big = require('big.js');

function Currency() {
  var currencyCode = 'Default';
  this.getCurrencyCode = function () {
    return currencyCode;
  };
  this.equals = function (currency) {
    if (currency.getCurrencyCode() !== this.getCurrencyCode()) {
      return false;
    }
    return true;
  };
}

function Money(initialValue) {
  var ERROR_CURRENCIES_DONT_MATCH = "Currencies don't match : ";

  var value = big(initialValue).valueOf(); // returns a string
  this.currency = new Currency();

  this.add = function (money) {
    if (!money) {
      return undefined;
    }
    if (!isCurrencyEqual(money)) {
      throw new Error(ERROR_CURRENCIES_DONT_MATCH
					+ this.currency.getCurrencyCode() + ', '
					+ money.getCurrency().getCurrencyCode());
    }

    return new Money(big(this.getValue()).add(money.getValue()).valueOf(), this.currency);
  };

  this.compareTo = function (otherMoney) {
    if (!otherMoney) {
      throw new Error('Money to compare to is null or undefined.');
    }
    var result = 0;
    if (otherMoney.getCurrency().getCurrencyCode().toLowerCase() < this.currency.getCurrencyCode().toLowerCase()) {
      result = -1;
    } else if (otherMoney.getCurrency().getCurrencyCode().toLowerCase() > this.currency.getCurrencyCode().toLowerCase()) {
      result = 1;
    }

    if (result === 0) {
      var returnValue = 0;
      if (big(value).lt(otherMoney.getValue())) {
        return -1;
      } else if (big(value).gt(otherMoney.getValue())) {
        return 1;
      }

      return returnValue;
    }
    return result;
  };

  this.equals = function (otherMoney) {
    if (this === otherMoney) {
      return true;
    }
    if (!(otherMoney instanceof Money)) {
      return false;
    }
    if (otherMoney.getValue() !== value) {
      return false;
    }
    if (!this.currency) {
      if (!!otherMoney.currency) {
        return false;
      }
    } else if (this.currency.getCurrencyCode() !== otherMoney.currency.getCurrencyCode()) {
      return false;
    }
    return true;
  };

  this.getValue = function () {
    return value;
  };

  this.multiply = function (multiplicand) {
    return new Money(big(value).times(multiplicand).valueOf(), this.currency);
  };

  var thisClass = this;
  function isCurrencyEqual(money) {
    return money.getCurrency().getCurrencyCode().toLowerCase() === thisClass.currency.getCurrencyCode().toLowerCase();
  }

  this.getCurrency = function () {
    return this.currency;
  };

  this.toString = function () {
    return '$' + this.getValue();
  };
}

module.exports = Money;
