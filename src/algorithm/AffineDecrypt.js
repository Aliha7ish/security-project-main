import ConvertToASCII from "./ConvertToASCII";
import coPrimeCheck from "./coPrimeCheck";
import MultInverse from "./MultInverse";
export default function AffineDecrypt(cipherText, a, b) {
  const n = 26;
  //Clause Guard
  if (coPrimeCheck(a, n) !== 1) return;
  const a_inv = MultInverse(a, n);
  console.log(a_inv);
  const ASCIIArr = ConvertToASCII(cipherText);
  let plainText = ASCIIArr.map((num) => {
    let _num = (a_inv * (num - b)) % n;
    if (_num < 0) return _num > 26 ? _num + n + 65 : _num + n + 97;
    return _num > 26 ? _num + 65 : _num + 97;
  })
    .map((asc) => String.fromCharCode(asc))
    .join("");
  console.log(plainText);
  return plainText;
}
