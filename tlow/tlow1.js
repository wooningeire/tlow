function foo(a, b, c, d) {

  // get the remainder from a division attempt
  function modulo(dividend, divisor) {
    return dividend - Math.floor(dividend / divisor) * divisor;
  }

  return modulo(modulo(a, b), modulo(c, d));

}