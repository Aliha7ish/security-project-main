export default function coPrimeCheck(a, n) {
  if (a === 0 || n === 0) return 0;
  if (a === n) return a;
  if (a > n) return coPrimeCheck(a - n, n);
  return coPrimeCheck(a, n - a);
}
