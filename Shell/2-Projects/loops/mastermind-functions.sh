#!/bin/bash

function mastermind_create_solution {
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
    echo 
}
