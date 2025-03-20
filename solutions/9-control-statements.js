// BEGIN
export const getTotalAmount = (arr, moneyName) => {
    let cost = 0;
    for (const parity of arr) {
        if (parity.slice(0,3) === moneyName) {
            cost += Number(parity.slice(3));
        }
    }
    return cost;
}
export default getTotalAmount;
// END