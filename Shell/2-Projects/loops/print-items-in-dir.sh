#!/bin/bash

# Write a Bash script which will take a single command line argument
# (a directory) and will print each entry in that directory.
# If the entry is a file it will print it's size. If the entry is a
# directory it will print how many items are in that directory.

if (( $# > 1 )); then
    echo "ERROR: Too many arguments."
    exit
elif (( $# == 0 )); then
    echo "Pass a directory as an argument."
    exit
fi

printed_value=

for item in $1/*; do
    if [[ -f "$item" ]]; then
        # (https://unix.stackexchange.com/questions/16640/how-can-i-get-the-size-of-a-file-in-a-bash-script)
        # filesize=$(stat -c%s "$item")
        filesize=$(wc -c "$item" | awk '{print $1}')
        printed_value="${item} ${filesize}"
    elif [[ -d "$item" ]]; then
        # https://devconnected.com/how-to-count-files-in-directory-on-linux/
        number_of_files=$(ls "$item" | wc -l)
        printed_value="DIR: ${item} ${number_of_files}"
    fi
    echo "$printed_value"
done
