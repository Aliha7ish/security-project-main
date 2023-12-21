import ConvertToASCII from "./ConvertToASCII";
export default function CeaserDecrypt(cipherText, key) {
  const n = 26;
  const ASCIIArr = ConvertToASCII(cipherText);
  let plainText = ASCIIArr.map((num) =>
    num < 26 ? ((num - key) % n) + 97 : ((num - key) % n) + 65
  )
    .map((asc) => String.fromCharCode(asc))
    .join("");
  return plainText;
}
