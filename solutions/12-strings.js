// BEGIN
export const makeCensored = (text, badWords) =>{
    let words = text.split(' ');
    let censoredSensed = [];

    for (let i = 0; i < words.length; i++){
        const word = words[i];
        if (badWords.includes(word)){
            censoredSensed.push('$#%!');
        }else {
            censoredSensed.push(word);
        }
    }
    return censoredSensed.join(' ');
}
export default makeCensored;
// END