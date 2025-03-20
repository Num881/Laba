// BEGIN
export const getSameParity = (arr) =>  {
    if (arr.length === 0) {
        return [];
    }

    const firstNumber = arr[0];
    const isFirstNumber = Math.abs(firstNumber) % 2 === 0;

    const result = [];
    for (const number of arr) {
        if ((Math.abs(number) % 2 === 0) === isFirstNumber){
            result.push(number);
        }
    }
    return result;
}
export default getSameParity
// END