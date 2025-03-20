// BEGIN
const calculateSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0){
            sum += arr[i];
        }
    }
    return sum;
}
export {calculateSum}
// END