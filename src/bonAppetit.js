function bonAppetit(bill, k, b) {
    // Write your code here

    const eatItem = [...bill]

    eatItem.splice(k, 1)

    const totalBill = eatItem.reduce((total, bill) => total += bill, 0)


    const billActual = totalBill / 2

    const billCharged = b

    if (billActual === billCharged) {
         console.log("Bon Appetit")
    } else {
        console.log(billCharged - billActual);
    }

}

module.exports = bonAppetit
