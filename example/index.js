"use strict";

const Cipher = require("../lib");

// Key used to encryp/decrypt
const key = "ROSEMARY"

console.log(Cipher.encrypt("BEGINTHEATTACKATDAWN", key))
// => SSYMZTYCBXZIPDHXDTPN

console.log(Cipher.decrypt("SSYMZTYCBXZIPDHXDTPN", key))
// => BEGINTHEATTACKATDAWN

// With spaces
console.log(Cipher.encrypt("BEGIN THE ATTACK AT DAWN!", key))



console.log(Cipher.encrypt("HITHERE", "MAN"))
// => SSYMZTYCBXZIPDHXDTPN

console.log(Cipher.decrypt("TI GOMKL!", "MAN"))
