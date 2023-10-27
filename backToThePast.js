function backToThePast(input) {

    let money = Number(input[0]);
    let lastYear = Number(input[1]);

    let years = 18;
    let currentYear = 1800;

    let moneySpent = 0;

    for (let i = currentYear; i <= lastYear; i++) {
        if (i % 2 === 0) {
            moneySpent += 12000;
        } else {
            moneySpent += 12000 + years * 50;
        }
        years++;
    }

    let moneyLeft = 0;
    let moneyNeeded = 0;

    moneyLeft = money - moneySpent;
    moneyNeeded = moneySpent - money;

    if (money >= moneySpent) {
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`)
    }
}

backToThePast(["50000", "1802"]);