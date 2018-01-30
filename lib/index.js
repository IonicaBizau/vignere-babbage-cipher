"use strict";

// Key:        C O D E H E L L O W (x)
// Encrypted:  J S O P V A Z C Z Z (from the table)
// Plain text: H E L L O W O R L D (Y)

const VIGNERE_SQUARE = {
    A: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  , B: "BCDEFGHIJKLMNOPQRSTUVWXYZA"
  , C: "CDEFGHIJKLMNOPQRSTUVWXYZAB"
  , D: "DEFGHIJKLMNOPQRSTUVWXYZABC"
  , E: "EFGHIJKLMNOPQRSTUVWXYZABCD"
  , F: "FGHIJKLMNOPQRSTUVWXYZABCDE"
  , G: "GHIJKLMNOPQRSTUVWXYZABCDEF"
  , H: "HIJKLMNOPQRSTUVWXYZABCDEFG"
  , I: "IJKLMNOPQRSTUVWXYZABCDEFGH"
  , J: "JKLMNOPQRSTUVWXYZABCDEFGHI"
  , K: "KLMNOPQRSTUVWXYZABCDEFGHIJ"
  , L: "LMNOPQRSTUVWXYZABCDEFGHIJK"
  , M: "MNOPQRSTUVWXYZABCDEFGHIJKL"
  , N: "NOPQRSTUVWXYZABCDEFGHIJKLM"
  , O: "OPQRSTUVWXYZABCDEFGHIJKLMN"
  , P: "PQRSTUVWXYZABCDEFGHIJKLMNO"
  , Q: "QRSTUVWXYZABCDEFGHIJKLMNOP"
  , R: "RSTUVWXYZABCDEFGHIJKLMNOPQ"
  , S: "STUVWXYZABCDEFGHIJKLMNOPQR"
  , T: "TUVWXYZABCDEFGHIJKLMNOPQRS"
  , U: "UVWXYZABCDEFGHIJKLMNOPQRST"
  , V: "VWXYZABCDEFGHIJKLMNOPQRSTU"
  , W: "WXYZABCDEFGHIJKLMNOPQRSTUV"
  , X: "XYZABCDEFGHIJKLMNOPQRSTUVW"
  , Y: "YZABCDEFGHIJKLMNOPQRSTUVWX"
  , Z: "ZABCDEFGHIJKLMNOPQRSTUVWXY"
}

class VignereBabbageCipher {
    /**
     * encrypt
     * Encrypt the plain text.
     *
     * @name encrypt
     * @function
     * @static
     * @param {String} input The plain text to encrypt.
     * @param {String} key The key.
     * @returns {String} The encrypted version.
     */
    static encrypt (input, key) {
        let decrypted = ""
        if (input.length > key.length) {
            key += input.slice(0, input.length - key.length)
        }
        return input.split("").map((letter, index) => {
            return VIGNERE_SQUARE[letter][VIGNERE_SQUARE.A.indexOf(key[index])]
        }).join("")
    }

    /**
     * decrypt
     * Decrypt the input.
     *
     * @name decrypt
     * @function
     * @static
     * @param {String} input Decrypt the encrypted text.
     * @param {String} key The key.
     * @returns {String} The result in plain text.
     */
    static decrypt (input, key) {
        let decrypted = ""
        return input.split("").map((letter, index) => {
            const cLetter = VIGNERE_SQUARE.A[VIGNERE_SQUARE[key[index]].indexOf(letter)]
            key += cLetter
            return cLetter
        }).join("")
    }
}

module.exports = VignereBabbageCipher
