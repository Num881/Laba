// BEGIN
const addPrefix  = (arr, prefix) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(prefix +' '+ arr[i])
    }
    return newArr
}

export default addPrefix
// END