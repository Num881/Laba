// BEGIN
export const getSuperSeriesWinner = (scores) =>{
    let ussrScore = 0;
    let canadaScore = 0;

    for (const score of scores){
        if (score[0] > score[1]){
            canadaScore++;
        } else if (score[1] > score[0]){
            ussrScore++;
        }
    }
    if (ussrScore > canadaScore){
        return "ussr";
    }else if (canadaScore > ussrScore){
        return "canada";
    }else {
        return null;
    }

}
export default getSuperSeriesWinner;
// END