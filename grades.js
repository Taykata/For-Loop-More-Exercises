function grades(input) {

    let students = Number(input[0]);
    let index = 1;
    let grade = Number(input[index]);
    index++;

    let studentsCounter1 = 0;
    let studentsCounter2 = 0;
    let studentsCounter3 = 0;
    let studentsCounter4 = 0;

    let sumGrades = 0;

    for (let i = index; i <= students + 1; i++) {

        if (grade >= 2 && grade <= 2.99) {
            studentsCounter1++;
        } else if (grade >= 3 && grade <= 3.99) {
            studentsCounter2++;
        } else if (grade >= 4 && grade <= 4.99) {
            studentsCounter3++;
        } else if (grade >= 5) {
            studentsCounter4++;
        }

        sumGrades += grade;

        grade = Number(input[index]);
        index++;

    }

    let topStudents = studentsCounter4 *100 / students;
    let between4And5 = studentsCounter3 *100 / students;
    let between3And4 = studentsCounter2 *100 / students;
    let fail = studentsCounter1 *100 / students;

    let average = sumGrades / students;

    console.log(`Top students: ${(topStudents.toFixed(2))}%`);
    console.log(`Between 4.00 and 4.99: ${(between4And5).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(between3And4).toFixed(2)}%`);
    console.log(`Fail: ${(fail).toFixed(2)}%`);
    console.log(`Average: ${(average).toFixed(2)}`);

}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);