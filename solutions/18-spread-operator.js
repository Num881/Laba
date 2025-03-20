// BEGIN
const flatten = (arr) => {
    const result = [];

    for (const temp of arr) {
        if (Array.isArray(temp)) {
            result.push(...temp);
        }else {
            result.push(temp);
        }
    }
    return result;
}
export { flatten };