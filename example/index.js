"use strict";

const Cipher = require("../lib");

// Key used to encryp/decrypt
const key = "ROSEMARY"

console.log(Cipher.encrypt("BEGINTHEATTACKATDAWN", key))
// => SSYMZTYCBXZIPDHXDTPN

console.log(Cipher.decrypt("SSYMZTYCBXZIPDHXDTPN", key))
// => BEGINTHEATTACKATDAWN
