function equalPairs(input) {
 
    let pairs = Number(input[0]) * 2;
 
    let tempResult = 0;
 
    let tempdiff =0;
    let maxDiff = 0;
    let bool = true;
 
    for (let i = 1; i <= pairs; i++) {
 
        a = Number(input[i]);
        i++
        b = Number(input[i]);
        let result = a + b;
 
        if(pairs === 2){
            console.log(`Yes, value=${result}`)
            bool = false;
 
            break;
 
        }
 
        if (tempResult === 0) {
            tempResult = result;
        } else if (result === tempResult && tempdiff ===0) {
            console.log(`Yes, value=${result}`)
            bool = false;
            break;
        } else {
            let diff = Math.abs(result - tempResult);
            tempResult = result
 
            if (tempdiff === 0 ) {
 
                tempdiff = diff;
                maxDiff = tempdiff
            } else if (maxDiff < diff) {
                maxDiff = diff;
            }
        }
    }
 
    if (bool) {
 
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs(["7", "34", "-33", "52", "12", "-32", "32", "23", "41", "7", "25", "34", "23", "124", "21"]);