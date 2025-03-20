// BEGIN
const get = (arr, index, defaultValue = null) => {
    if (index < 0 || index >= arr.length) {
        return defaultValue;
    }
    return arr[index]
}

export {get}
// END