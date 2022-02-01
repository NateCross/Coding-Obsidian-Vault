import java.util.Scanner;

class TemperatureConversion {
    private static double userInputNumber;
    private static int userInputMenu;
    private static final Scanner INPUT = new Scanner(System.in);

    private void displayMenu() {
        System.out.println("Temperature Conversion");
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");
        System.out.println("3. Exit");
        System.out.println();
    }

    private void handleMenu() {
        double result = 0;
        boolean resultFound = false;
        switch (userInputMenu) {
            case 1:
                setUserInputNumber();
                result = CelToFahr();
                resultFound = true;
                break;
            case 2:
                setUserInputNumber();
                result = FahrToCel();
                resultFound = true;
                break;
            case 3:
                exitProg();
                break;
            default:
                System.out.println("ERROR: Invalid input.");
                System.out.println("Please try again.");
                break;
        }
        if (resultFound)
            System.out.println("RESULT: " + result);

        System.out.println();
    }

    // For Java, the Scanner class is used for input
    // We must create an object of it, and always close afterward
    // (https://www.w3schools.com/java/java_user_input.asp)
    private void setUserInputNumber() {
        try {
            System.out.println("Enter number to be converted: ");
            userInputNumber = INPUT.nextDouble();
        } catch (Exception e) {
            System.out.println();
            System.out.println("ERROR: Invalid input.");
            exitProg();
        }
    }

    private void setChoice() {
        try {
            System.out.println("Enter choice: ");
            userInputMenu = INPUT.nextInt();
        } catch (Exception e) {
            System.out.println();
            System.out.println("ERROR: Invalid input.");
            exitProg();
        }
    }

    private double CelToFahr() {
        return (double) (userInputNumber * 9 / 5) + 32;
    }

    private double FahrToCel() {
        return (double) (userInputNumber - 32) * 5 / 9;
    }

    private void exitProg() {
        System.out.println("Exiting program...");
        System.out.println("Goodbye!");
        INPUT.close();
        System.exit(0);
    }

    public static void main(String[] args) {
        TemperatureConversion temp = new TemperatureConversion();
        while (true) {
            temp.displayMenu();
            temp.setChoice();
            temp.handleMenu();
        }
    }
}
