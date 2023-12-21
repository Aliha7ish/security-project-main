function ConvertToASCII(text) {
  let nLower = 97;
  let nUpper;
  let ASCIIArr = [];
  const charArr = text.split("");

  if (charArr.every((char) => char === char.toUpperCase())) {
    nUpper = 65;
  }

  if (
    charArr.some((char) => char === char.toLowerCase()) &&
    charArr.some((char) => char === char.toUpperCase())
  ) {
    nUpper = 39;
  }
  ASCIIArr = charArr.map((char) =>
    char === char.toUpperCase()
      ? char.charCodeAt() - nUpper
      : char.charCodeAt() - nLower
  );
  return ASCIIArr;
}

// let language = []
// let str = ''
// let lower = []
// for(let i = 'a'.charCodeAt();i<='z'.charCodeAt();i++) lower.push(String.fromCharCode(i))
// console.log(lower)
// let upper = []
// for(let i = 'A'.charCodeAt();i<='Z'.charCodeAt();i++) upper.push(String.fromCharCode(i))
// if(str.includes(' ')) language.push(' ')
// if(str.filter(value => lower.includes(value)).length!==0)language.push(...lower)
// if(str.filter(value => upper.includes(value)).length!==0)language.push(...upper)

export default ConvertToASCII;
