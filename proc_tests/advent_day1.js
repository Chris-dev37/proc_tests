// Advent Day 1: Report Repair https://adventofcode.com/2020/day/1
// Prints the answer twice due to the double forEach statment, not ideal.

const expence = [255, 2209, 1700, 30, 600, 320, 546];

const findEntries = () => {
    expence.forEach(e => {
        expence.forEach(x => {
            if (e + x === 2020) {
                console.log(e + " + " + x + " = " + [e + x]);
                console.log(e + " x " + x + " = " + [e * x]);
            };
        })
    })
    // expence.forEach(e => {
    //     for (let i = 0; i < expence.length; i++) {
    //         if (e + expence[i] === 2020) {
    //             console.log(e + " + " + expence[i] + " = " + (e + expence[i]));
    //             console.log(e + " x " + expence[i] + " = " + (e * expence[i]));
    //         }
    //     }
    // })
}

findEntries();