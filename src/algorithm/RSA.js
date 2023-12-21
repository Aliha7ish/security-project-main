import coPrimeCheck from "./coPrimeCheck";
import MultInverse from "./MultInverse";
import isPrime from "./isPrime";

function RSA(p, q, e) {
  //Whether (p,q) are prime
  if (!isPrime(p) || !isPrime(q)) return;

  //assign n(used in Encryption, Decryption )
  const n = p * q;
  const FN = (p - 1) * (q - 1);

  //Check whether (1 < e < (p - 1)(q - 1))
  if (e <= 1 && e >= FN) return;
  //Check whether GCD(e, (p - 1)(q - 1)) == 1
  if (!coPrimeCheck(e, FN)) return;

  const d = MultInverse(e, FN);

  const rsa = {
    encryption: {
      publicKey: e,
      n: n,
    },
    decryption: {
      privateKey: d,
      n: n,
    },
  };
  return rsa;
}
export default RSA;
