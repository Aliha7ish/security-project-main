import ExtGCD, { x } from "./ExtGCD";

function MultInverse(a, n) {
  if (ExtGCD(a, n) !== 1) return;
  let aInv = ((x % n) + n) % n;
  return aInv;
}
export default MultInverse;
