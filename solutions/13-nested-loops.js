import {uniq} from "lodash";
const _ = require("lodash");

// BEGIN
export const getSameCount = (arrOne, arrTwo) => {
    let count = 0;
    let uniqArrOne = uniq(arrOne);
    let uniqArrTwo = uniq(arrTwo);

    for (let i = 0; i < uniqArrOne.length; i++) {
        for (let j = 0; j < uniqArrTwo.length; j++) {
            if (uniqArrOne[i] === uniqArrTwo[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}
export default getSameCount;
// END