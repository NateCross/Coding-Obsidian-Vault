#!/bin/bash

# Print 1-10 (each on a separate line)
# and whether they are even or odd

printed_number=""

for number in {1..10}; do
    if (( $number % 2 == 0 )); then
        printed_number="${number} Even"
    else
        printed_number="${number} Odd"
    fi

    echo "${printed_number}"
done

echo "Finished"


