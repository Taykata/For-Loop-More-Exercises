function gameOfIntervals(input) {

    let numberOfMoves = Number(input[0]);
    let index = 1;
    let move = Number(input[index]);
    index++;
    let points = 0;

    let from0To9Counter = 0;
    let from10To19Counter = 0;
    let from20To29Counter = 0;
    let from30To39Counter = 0;
    let from40To50Counter = 0;
    let invalidNumbersCounter = 0;

    for (let i = index; i <= numberOfMoves + 1; i++) {

        if (move >= 0 && move <= 9) {
            points += move * 20 / 100;
            from0To9Counter++;
        } else if (move >= 10 && move <= 19) {
            points += move * 30 / 100;
            from10To19Counter++;
        } else if (move >= 20 && move <= 29) {
            points += move * 40 / 100;
            from20To29Counter++;
        } else if (move >= 30 && move <= 39) {
            points += 50;
            from30To39Counter++;
        } else if (move >= 40 && move <= 50) {
            points += 100;
            from40To50Counter++;
        } else {
            points /= 2;
            invalidNumbersCounter++;
        }

        move = Number(input[index]);
        index++;

    }

    let from0To9 = from0To9Counter * 100 / numberOfMoves;
    let from10To19 = from10To19Counter * 100 / numberOfMoves;
    let from20To29 = from20To29Counter * 100 / numberOfMoves;
    let from30To39 = from30To39Counter * 100 / numberOfMoves;
    let from40To50 = from40To50Counter * 100 / numberOfMoves;
    let invalidNumbers = invalidNumbersCounter * 100 / numberOfMoves;

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(from0To9).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(from10To19).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(from20To29).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(from30To39).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(from40To50).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumbers).toFixed(2)}%`);

}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);