var Money = require('../lib/DontTouch/util/Money')
var priceDirectory = require('../src/constants')

function Purchase() {
    var products = []

    this.total = () => {
        if (products.length > 0) {
            let total = new Money(0)
            products.forEach(productCode => {
                total.add(priceDirectory[productCode])
            });
        }
        return total;
    }

    this.add = (productID) => {
        products.push(productID)
    }
}

module.exports = Purchase