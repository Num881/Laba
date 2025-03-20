// BEGIN
const getMax = (arr) =>{
    if (arr.length === 0){
        return null;
    }

    const [first, ...rest] = arr;
    let max = first;

    for (const maxed of rest) {
        if (maxed > max){
            max = maxed;
        }
    }
    return max;
}
export { getMax };