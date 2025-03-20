// BEGIN
export const reverse = (array) => {
    const  arrLength = array.length;
    let middle = arrLength / 2;
    if (arrLength % 2 !== 0){
        middle = (arrLength - 1) / 2;
    }

    for (let i = 0; i < middle; i++) {
        const temp = array[i];
        array[i] = array[arrLength - 1 - i];
        array[arrLength - 1 - i] = temp;
    }
}
export default reverse;
// END