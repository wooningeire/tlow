def foo(a, b, c, d):
    """Return the value of (a % b) % (c % d)."""

    def modulo(dividend, divisor):
        """Return the remainder of a division attempt."""
        return dividend - dividend // divisor * divisor
  
    return modulo(modulo(a, b), modulo(c, d))