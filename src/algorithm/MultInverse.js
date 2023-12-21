import ExtGCD, { x } from "./ExtGCD";

function MultInverse(a, n) {
  if (ExtGCD(a, n) !== 1) return;
  let aInv = ((x % n) + n) % n;
  console.log(aInv);
  return aInv;
}
MultInverse(17, 26);
export default MultInverse;
