import Money from '../lib/DontTouch/util/Money'

const Purchase = () => {
    const products = []
    const priceDirectory = {
        "000000001234": 16.69,
        "000000005678": 7.79,
        "010101010101": 2.77,
        "111100000000": 5.89,
        "222200000000": 6.01,
        "454500000000": 3.95,
        "464600000000": 149.95,
        "474700000000": 20.11,
    }

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

export default Purchase;