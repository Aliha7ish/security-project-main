import RSA from "./RSA";
import ConvertToASCII from "./ConvertToASCII";
function RsaDecrypt(cipherText, p, q, e) {
  const ASCIIArr = ConvertToASCII(cipherText);
  const { decryption } = RSA(p, q, e);

  const { privateKey: prK, n } = decryption;

  const plainText = ASCIIArr.map((num) =>
    num < 26 ? (num ** prK % n) + 97 : (num ** prK % n) + 65
  )
    .map((num) => String.fromCharCode(num))
    .join("");
  console.log(plainText);
  return cipherText;
}

RsaDecrypt("nello", 3,5,3);

export default RsaDecrypt;
