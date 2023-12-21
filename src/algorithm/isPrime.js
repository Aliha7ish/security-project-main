function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < Math.round(Math.sqrt(num + 1)) + 1; i++) {
    if (num % i === 0) return false;
    else return true;
  }
}

export default isPrime;
