function logistics(input) {

    let NumberOfCabrios = Number(input[0]);
    let index = 1;
    let cabrios = Number(input[index]);

    let levaForTon = 0;
    let allCabrios = 0;

    cabriosCounter1 = 0;
    cabriosCounter2 = 0;
    cabriosCounter3 = 0;

    for (let i = index; i <= NumberOfCabrios; i++) {

        if (cabrios <= 3) {
            levaForTon = 200;
            cabriosCounter1 += cabrios;
        } else if (cabrios <= 11) {
            levaForTon = 175;
            cabriosCounter2 += cabrios;
        } else if (cabrios >= 12) {
            levaForTon = 120;
            cabriosCounter3 += cabrios;
        }

        levaForTon += levaForTon;

        allCabrios += cabrios;

        index++;
        cabrios = Number(input[index]);

    }

    console.log(((cabriosCounter1 * 200 + cabriosCounter2 * 175 + cabriosCounter3 * 120) / allCabrios).toFixed(2));
    console.log((cabriosCounter1 / allCabrios * 100).toFixed(2) + "%");
    console.log((cabriosCounter2 / allCabrios * 100).toFixed(2) + "%");
    console.log((cabriosCounter3 / allCabrios * 100).toFixed(2) + "%");

}

logistics(["4", "1", "5", "16", "3",]);