// Advent Day 4: Passport Processing https://adventofcode.com/2020/day/4
// Not completed properly.

const required_keys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const passports = {
    passport_0: {
        byr: "a",
        iyr: "b",
        eyr: "c",
        hgt: "d",
        hcl: "e",
        ecl: "f",
        pid: 1,
        cid: "g"
    },
    passport_1: {
        byr: "a",
        iyr: "b",
        eyr: "c",
        ecl: "f",
        pid: 2,
        cid: "g"
    },
    passport_2: {
        byr: "a",
        iyr: "b",
        eyr: "c",
        hgt: "d",
        hcl: "e",
        ecl: "f",
        pid: 3,
        cid: "g"
    }
};

const passportCheck = () => {
    let gdPassports = 0;
    let bdPassports = 0;

    // Object.values(passports).forEach(e => {
    //     if (e === "byr" || "iyr" || "eyr" || "hgt" || "hcl" || "ecl" || "pid") {
    //         console.log("Passport with pid " + e.pid + ": is valid");
    //     }
    // })

    for (const [key, value] of Object.entries(passports)) {
        if (required_keys.every(k => key.includes(k))) {
            gdPassports++;
        } else {
            bdPassports++;
        }
    }
    console.log("Accepted Passports: " + gdPassports);
    console.log("Declined Passports: " + bdPassports);

    // if (required_keys.every(key => Object.keys(passports.passport_0).includes(key))) {
    //     console.log("Passport with pid " + passports.passport_0.pid + ": is valid");
    // }else{
    //     console.log("Passport with pid " + passports.passport_0.pid + ": isn't valid");
    //    };

    // if (required_keys.every(key => Object.keys(passports.passport_1).includes(key))) {
    //     console.log("Passport with pid " + passports.passport_1.pid + ": is valid");
    // }else{
    //     console.log("Passport with pid " + passports.passport_1.pid + ": isn't valid");
    //    };

    // if (required_keys.every(key => Object.keys(passports.passport_2).includes(key))) {
    //     console.log("Passport with pid " + passports.passport_2.pid + ": is valid");
    // }else{
    //     console.log("Passport with pid " + passports.passport_2.pid + ": isn't valid");
    //    };


    // for (let i = 0; i < Object.keys(passports).length; i++) {
    //
    //     let temp = (".passport_" + [i])
    //     console.log(Object.keys(passports.temp).includes("byr"));

    //     if (required_keys.every(key => Object.keys(passports).includes(key))) {
    //         console.log("match");
    //     }
    // }

}
passportCheck();