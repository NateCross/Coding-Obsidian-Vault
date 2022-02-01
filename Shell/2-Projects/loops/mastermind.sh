#!/bin/bash

# USAGE
# Command line switches
# --debug         Prints out the randomly generated solution

colors_list=(R O Y G B I V P)
number_of_colors=5

solution=()

# Initializing the solution with at least one thing
# so that the if statement in the loop below works properly
randomnum=$((1 + $RANDOM % 7))
solution+=(${colors_list[$randomnum]})

# Generate the solution
# It pulls 5 unique colors from the list above
counter=1
while (( $counter < $number_of_colors )); do
    randomnum=$((1 + $RANDOM % 7))
    if [[ "${solution[*]}" =~ "${colors_list[$randomnum]}" ]]; then
        continue
    fi
    solution+=(${colors_list[$randomnum]})
    ((counter++))
done


# Main driver
clear
echo "Mastermind in Bash"
echo "Guess the right combination of 5 colors from"
echo "R O Y G B I V P"
echo "Enter 5 colors separated by spaces to guess"
if [[ "$@" =~ "--debug" ]]; then
    echo "DEBUG: ${solution[*]}"
fi
echo; echo

# guess_counter=1
input_guess=()
for guess_counter in {1..8}; do
    correct_guess=()
    almost_guess=()
    incorrect_guess=()
    echo "Last Guess: [${last_guess[*]}]"
    echo "Guess #$guess_counter"
    read -a input_guess

    for num in {0..4}; do
        if [[ ${input_guess[$num]} == ${solution[$num]} ]]; then
            correct_guess+=("0")
        elif [[ ${solution[*]} =~ ${input_guess[$num]} ]]; then
            almost_guess+=("|")
        else
            incorrect_guess+=("-")
        fi
    done

    last_guess=()
    last_guess=(${correct_guess[@]} ${almost_guess[@]} ${incorrect_guess[@]})

    if [[ ! ${last_guess[*]} =~ "|" ]] && [[ ! ${last_guess[*]} =~ "-" ]]; then
        echo "Solved!"
        exit
    fi
done

echo "The correct answer is: ${solution[*]}"
echo "Finished"
