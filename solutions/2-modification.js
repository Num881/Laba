// BEGIN
const swap = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];
    const temp = firstElement;
    arr[0] = lastElement;
    arr[arr.length - 1] = temp;

    return arr;

}
export default swap ;
// END