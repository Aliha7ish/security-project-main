export let x;
let y;
function ExtGCD(a, n) {
  if (a === 0) {
    x = 0;
    y = 1;
    return n;
  }
  let gcd = ExtGCD(n % a, a);
  let _x = x;
  let _y = y;

  x = _y - Math.floor(n / a) * _x;
  y = _x;
  return gcd;
}

export default ExtGCD;
