def fizz(n):
  """Return values between 0 and n (inclusive) divisible by 3 or 5, but not both."""
  numbers = []
  step = 1 if n >= 0 else -1

  for i in range(0, n + step, step):
    if (i % 3 == 0) ^ (i % 5 == 0):
      numbers.append(i)

  return numbers