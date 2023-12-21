import ConvertToASCII from "./ConvertToASCII";
import RSA from "./RSA";
function RsaEncrypt(plainText, p, q, e) {
  const ASCIIArr = ConvertToASCII(plainText);
  const { encryption } = RSA(p, q, e);
  const { publicKey: pk, n } = encryption;

  const cipherText = ASCIIArr.map((num) =>
    num < 26 ? (num ** pk % n) + 97 : (num ** pk % n) + 65
  )
    .map((num) => String.fromCharCode(num))
    .join("");
  return cipherText;
}
export default RsaEncrypt;
