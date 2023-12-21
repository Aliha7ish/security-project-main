import ConvertToASCII from "./ConvertToASCII";
import coPrimeCheck from "./coPrimeCheck";

function AffineEncrypt(plainText, a, b) {
  const n = 26;
  //Clause Guard
  if (coPrimeCheck(a, n) !== 1) return;
  const ASCIIArr = ConvertToASCII(plainText);
  let cipherText = ASCIIArr.map((num) =>
    num < 26 ? ((a * num + b) % n) + 97 : ((a * num + b) % n) + 65
  )
    .map((asc) => String.fromCharCode(asc))
    .join("");
  return cipherText;
}

export default AffineEncrypt;
