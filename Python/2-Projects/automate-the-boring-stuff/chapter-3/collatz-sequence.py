def collatz(number):
    if number % 2 == 0:     # Even number
        number = int(number / 2)
    else:                   # Odd number
        number = int(number * 3 + 1)
    print(number)
    if number != 1:
        collatz(number)
    return number


if __name__ == "__main__":
    try:
        user_input = int(input("Enter a number: "))
        collatz(user_input)
    except:
        print("Please enter an integer.")

