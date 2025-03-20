// BEGIN
export const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapp = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapp = true;
            }
        }
    }
    return arr;
}
export default bubbleSort;
// END