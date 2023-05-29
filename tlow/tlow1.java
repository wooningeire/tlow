public class Foo {
  public static void main(String[] args) {}

  private static double foo(double a, double b, double c, double d) {
    return modulo(modulo(a, b), modulo(c, d));
  }
  
  private static double modulo(double dividend, double divisor) {
    return dividend - Math.floor(dividend / divisor) * divisor;
  }
}