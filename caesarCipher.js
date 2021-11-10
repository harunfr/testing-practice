function caesarCipher(string) {
  let encrypted = "";

  for (let index = 0; index < string.length; index++) {
    if (/[A-Za-z]/.test(string[index])) {
      if (string[index] === "z") {
        var charCode = 97;
      } else {
        var charCode = string.charCodeAt(index) + 1;
      }
    } else {
      var charCode = string.charCodeAt(index);
    }

    let encryptedLetter = String.fromCharCode(charCode);
    encrypted += encryptedLetter;
  }

  return encrypted;
}
module.exports = caesarCipher;