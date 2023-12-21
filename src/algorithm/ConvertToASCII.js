function ConvertToASCII(text) {
  let nLower = 97;
  let nUpper = 39;
  let ASCIIArr = [];
  let charArr = text.split("");

  if (charArr.includes(" ")) {
    nLower += 1;
    nUpper += 1;
  }
  ASCIIArr = charArr.map((s) =>
    s === " "
      ? s.charCodeAt() - 32
      : s === s.toUpperCase()
      ? s.charCodeAt() - nUpper
      : s.charCodeAt() - nLower
  );
  return ASCIIArr;
}

export default ConvertToASCII;
