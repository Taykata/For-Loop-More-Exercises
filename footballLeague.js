function footballLeague(input) {

    let stadion = Number(input[0]);
    let fans = Number(input[1]);
    let index = 2;
    let sector = input[index];

    let fansCounterA = 0;
    let fansCounterB = 0;
    let fansCounterV = 0;
    let fansCounterG = 0;

    precentFansA = 0;
    precentFansB = 0;
    precentFansV = 0;
    precentFansG = 0;

    for (let i = index; i <= fans + 1; i++) {

        if (sector === "A") {
            fansCounterA++;
        } else if (sector === "B") {
            fansCounterB++;
        } else if (sector === "V") {
            fansCounterV++;
        } else if (sector === "G") {
            fansCounterG++;
        }

        index++;
        sector = input[index];

    }

    precentFansA = fansCounterA / fans * 100;
    precentFansB = fansCounterB / fans * 100;
    precentFansV = fansCounterV / fans * 100;
    precentFansG = fansCounterG / fans * 100;

    let allFans = fans / stadion * 100;

    console.log(`${(precentFansA).toFixed(2)}%`);
    console.log(`${(precentFansB).toFixed(2)}%`);
    console.log(`${(precentFansV).toFixed(2)}%`);
    console.log(`${(precentFansG).toFixed(2)}%`);
    console.log(`${(allFans).toFixed(2)}%`);

}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);