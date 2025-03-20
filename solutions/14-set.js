// BEGIN
export const countUniqChars = (string) =>{
    const uniqChars = new Set();
    for (const char of string){
        uniqChars.add(char);
    }
    return uniqChars.size;
}

export default countUniqChars;
// END