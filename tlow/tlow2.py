def f(n):
  """Return values between 0 and n (inclusive) divisible by 3 or 5, but not both."""

  lower = min(0, n)
  upper = max(0, n + 1)

  for i in range(lower, upper):
    if (i % 3 == 0) ^ (i % 5 == 0):
      yield i