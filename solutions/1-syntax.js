// BEGIN (write your solution here)
const getWeekends = (returnFormat) => {
    const arrLong = ['saturday', 'sunday']
    const arrShort = ['sat', 'sun']

    return returnFormat === 'short' ? arrShort : arrLong;
}

export {getWeekends};
// END
