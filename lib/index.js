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

        input = input.toUpperCase()
        key = key.toUpperCase()

        key = key.replace(new RegExp("[^" + VIGNERE_SQUARE.A + "]", "g"), "")
        let index = -1
        return input.split("").map((letter) => {
            const charset = VIGNERE_SQUARE[letter]
            if (charset) {
                return charset[VIGNERE_SQUARE.A.indexOf(key[++index])]
            } else {
                return letter
            }
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

        input = input.toUpperCase()
        key = key.toUpperCase()

        let index = 0
        return input.split("").map(letter => {
            const charset = VIGNERE_SQUARE[key[index]]
            if (!VIGNERE_SQUARE[letter]) {
                return letter
            }
            const cLetter = VIGNERE_SQUARE.A[charset.indexOf(letter)]
            key += cLetter
            ++index
            return cLetter
        }).join("")
    }
}

module.exports = VignereBabbageCipher
