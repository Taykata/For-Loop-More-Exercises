function hospital(input) {

    let index = 0;
    let period = Number(input[index]);
    index++;
    let patientCount = Number(input[index]);

    let treatedPatients = 0;
    let untreatedPatients = 0;

    let doctors = 7;

    for (let days = 1; days <= period; days++) {

        if (days % 3 === 0 && untreatedPatients > treatedPatients) {
            doctors++;
        }
        
        if (doctors >= patientCount) {
            treatedPatients += patientCount;
            untreatedPatients += 0;
        } else {
            treatedPatients += doctors;
            untreatedPatients += patientCount - doctors;
        }

        index++;
        patientCount = Number(input[index]);

    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}

hospital(["4", "7", "27", "9", "1"]);