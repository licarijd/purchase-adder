var Money = require('../lib/DontTouch/util/Money')
var priceDirectory = require('../src/constants')

function Purchase() {
    var products = []

    this.total = () => {
        let total = new Money(0)
        products.forEach(productCode => {
            total = total.add(priceDirectory[productCode])
        });
        return total.getValue();
    }

    this.add = (productID) => {
        products.push(productID)
    }
}

module.exports = Purchase