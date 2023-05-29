public class tlow2 {
    public static void main(String[] args) {}
    public static ArrayList<int> challenge2(int n) {
        ArrayList<int> numbers = new ArrayList<>();
        int step = n >= 0 ? 1 : -1;
        for (int i = 0; i < n + step; i += step)
            if ((i % 3 == 0) ^ (i % 5 == 0)) numbers.add(i);
        return numbers;
    }
}