def comma_separated_list(list_input):
    final_string = ""
    for item in list_input[:-1]:    # Cleanest way to get all but last item
                                    # This is called a slice
        final_string += str(item) + ", "
    final_string += "and " + str(list_input[-1])
    return final_string


if __name__ == "__main__":
    print(comma_separated_list(["peepee", "poopoo", 3]))
