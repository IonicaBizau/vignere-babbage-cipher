"use strict";

const tester = require("tester")
    , vignereBabbageCipher = require("..")
    ;

tester.describe("vignere-babbage-cipher", t => {
    const tests = {
        shortKeyAndLongText: ["HITHERE", "AB"],
        shortKeyAndLongText2: ["HITHERE", "A"],
        longerKey: ["HITHERE", "THISISALONGKEY"],

        punctuationShortKeyAndLongText: ["HITHERE!", "AB"],
        punctuationShortKeyAndLongText2: ["HITHERE!", "A"],
        punctuationLongerKey: ["HITHERE!", "THISISALONGKEY"],

        punctuationWithSpacesShortKeyAndLongText: ["HI THERE!", "AB"],
        punctuationWithSpacesShortKeyAndLongText2: ["HI THERE!", "A"],
        punctuationWithSpacesLongerKey: ["HI THERE!", "THISISALONGKEY"],

        punctuationWithSpacesAndNewLinesShortKeyAndLongText: ["HI\nTHERE!", "AB"],
        punctuationWithSpacesAndNewLinesShortKeyAndLongText2: ["HI\nTHERE!", "A"],
        punctuationWithSpacesAndNewLinesLongerKey: ["HI\nTHERE!", "THISISALONGKEY"],
    }

    Object.keys(tests).forEach(k => {
        const tt = tests[k]
        t.should(`Encrypt/decrypt ${k} by using the Vignere–Babbage cipher`, () => {
            const encr = vignereBabbageCipher.encrypt(tt[0], tt[1])
            t.expect(encr).toBeA("string")
            t.expect(vignereBabbageCipher.decrypt(encr, tt[1])).toEqual(tt[0]);
        });
    })
});
