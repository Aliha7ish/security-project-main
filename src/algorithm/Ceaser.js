import ConvertToASCII from "./ConvertToASCII";
export default function CeaserEncrypt(plainText, key = 0) {
  const n = 26;
  const ASCIIArr = ConvertToASCII(plainText);
  let cipherText = ASCIIArr.map((num) =>
    num < 26 ? ((num + key) % n) + 97 : ((num + key) % n) + 65
  )
    .map((asc) => String.fromCharCode(asc))
    .join("");
  return cipherText;
}
