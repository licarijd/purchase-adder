var Money = require('../lib/DontTouch/util/Money')
var priceDirectory = require('../src/constants')

function Purchase() {
    var products = []

    this.total = () => {
        if (products.length > 0) {
            let total = 0
            products.forEach(productCode => {
                console.log(total)
                console.log(productCode)
                total += priceDirectory[productCode]
            });
            return new Money(total)
        } else {
            return new Money(0)
        }
    }

    this.add = (productID) => {
        products.push(productID)
        console.log(products)
    }
}

module.exports = Purchase