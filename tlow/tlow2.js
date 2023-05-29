function challenge2(n) {
  var numbers = [];
  var step = n >= 0 ? 1 : -1;

  for (var i = 0; i < n + step; i += step)
    if ((i % 3 == 0) ^ (i % 5 == 0))
      numbers.push(i);
  
  return numbers;
}