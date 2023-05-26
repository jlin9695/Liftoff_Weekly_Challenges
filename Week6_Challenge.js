public static String stringFinder(String word) {
    String result = "";

    for (int i = 0; i < word.length(); i++) {
        char c = word.charAt(i);
        if (Character.isLowerCase(c)) {
            result += c;
        }
    }

    return result;
}
