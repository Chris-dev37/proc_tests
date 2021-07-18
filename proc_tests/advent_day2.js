// Advent Day 2: Password Philosophy https://adventofcode.com/2020/day/2
// Completed

const passwords = {
    "1-3 a": "abac",
    "5-7 b": "bce",
    "3-5 c": "ccc",
    "2-6 d": "ddddddd",
    "15-12 e": "eeead"
}

const validPasswords = () => {
    let appPass = 0;
    let declPass = 0;

    for (const [k, v] of Object.entries(passwords)) {
        let min;
        let max;
        let letter = new RegExp(k.split(" ")[1], "g");
        let sepNum = k.split(" ")[0].split("-");

        if (sepNum[0] > sepNum[1]) {
            min = sepNum[1];
            max = sepNum[0];
        } else {
            min = sepNum[0];
            max = sepNum[1];
        }

        if ((v.match(letter)).length >= min && (v.match(letter)).length <= max) {
            appPass++;
            //console.log(value + " (pass)");
        } else {
            declPass++;
            //console.log(value + " (fail)");
        }

    }
    console.log("Total Acceptable Passwords: " + appPass);
    console.log("Total Declined Passwords: " + declPass);

}

validPasswords()