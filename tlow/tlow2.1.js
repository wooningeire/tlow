function* challenge2(n) {
  
  for (var i = 0; i < n + step; i += step) {
    if ((i % 3 == 0) ^ (i % 5 == 0)) {
      yield n;
    }
  }
  
}