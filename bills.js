function bills(input) {

    let months = Number(input[0]);
    let index = 1;

    let electricityPrice = Number(input[index]);
    index++;
    let waterPrice = 20;
    let internetPrice = 15;
    let otherPrice = (electricityPrice + waterPrice + internetPrice) * 1.20;

    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;
    

    for (let i = index; i <= months + 1; i++) {

        electricity += electricityPrice;
        water = waterPrice * months;
        internet = internetPrice * months;
        other += otherPrice;

        electricityPrice = Number(input[index]);
        index++;
        otherPrice = (electricityPrice + waterPrice + internetPrice) * 1.20;

    }

    let average = (electricity + water + internet + other) / months;

    console.log(`Electricity: ${(electricity).toFixed(2)} lv`);
    console.log(`Water: ${(water).toFixed(2)} lv`);
    console.log(`Internet: ${(internet).toFixed(2)} lv`);
    console.log(`Other: ${(other).toFixed(2)} lv`);
    console.log(`Average: ${(average).toFixed(2)} lv`);

}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);