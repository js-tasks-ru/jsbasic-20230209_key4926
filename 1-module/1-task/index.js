function factorial(n) {
  let n1 = n;
  if (n === 0 || n === 1) 
    return 1; 
  while (n > 1) { 
    n--;
    n1 *= n;
  }
  return n1;
}
