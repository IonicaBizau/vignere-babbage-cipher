
















# vignere-babbage-cipher

Encrypt/decrypt by using the Vignere–Babbage cipher




## Installation

```sh
$ npm i vignere-babbage-cipher
```









## Example






```js
"use strict";

const Cipher = require("vignere-babbage-cipher");

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

```






## Documentation





### `encrypt(input, key)`
Encrypt the plain text.

#### Params
- **String** `input`: The plain text to encrypt.
- **String** `key`: The key.

#### Return
- **String** The encrypted version.

### `decrypt(input, key)`
Decrypt the input.

#### Params
- **String** `input`: Decrypt the encrypted text.
- **String** `key`: The key.

#### Return
- **String** The result in plain text.






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
