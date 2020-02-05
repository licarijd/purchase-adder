var Money = require('../lib/DontTouch/util/Money')
var priceDirectory = require('../src/constants')

function Purchase() {
    var products = []

    this.total = () => {
        if (products.length > 0) {
            let total = 0
            products.forEach(productCode => {
                total += priceDirectory[productCode]
            });
            return total
        } else {
            return new Money(0)
        }
    }
}

module.exports = Purchase